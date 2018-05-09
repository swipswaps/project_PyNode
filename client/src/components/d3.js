import React, { Component } from "react";
import { connect } from "react-redux";
import { insertTitle } from "../d3Utils/GraphTitle";
import * as d3 from "d3";
import { infoBox } from "../d3Utils/infoBox";

class Circles extends Component {
  width = 0.6 * window.innerWidth;
  height = 0.8 * window.innerHeight;
  scaleIt = this.height;
  t = d3.transition().duration(1000);
  precision = d3.precisionFixed(0.1);
  format = d3.format("." + this.precision + "f");
  forceX = 2;
  forceY = 2.5;
  radiusX = 30;
  radiusY = 10;

  dragstarted = function(d) {
    d3
      .select(this)
      .raise()
      .classed("active", true);
  };

  dragged = function(d) {
    d3
      .select(this)
      .attr("cx", (d.x = d3.event.x))
      .attr("cy", (d.y = d3.event.y));
  };

  dragended = function(d) {
    d3.select(this).classed("active", false);
  };

  initialise() {
    const drag = d3
      .drag()
      .on("start", this.dragstarted)
      .on("drag", this.dragged)
      .on("end", this.dragended);

    let data = this.props.values.result;

    let scoreRange = data.map(el => {
      return el.sentiment === "negative"
        ? -1 * el.score
        : el.sentiment === "positive" ? el.score : 0;
    });

    console.log("before sort", scoreRange);
    scoreRange.sort((a, b) => {
      return a - b;
    });
    console.log("after sort", scoreRange);

    //trying colours
    let color = d3
      .scaleSequential(d3.interpolateRdBu)
      .domain([1.5 * scoreRange[0], 1.2 * scoreRange[scoreRange.length - 1]]);

    let radius = 4,
      fontSize = 4;

    let minSize = data[data.length - 1].score;
    let maxSize = data[0].score;

    let radiusScale = d3
      .scaleSqrt()
      .domain([minSize, maxSize])
      .range([this.scaleIt / this.radiusX, this.scaleIt / this.radiusY]);

    let simulation = d3
      .forceSimulation()
      .force("x", d3.forceX(this.width / this.forceX).strength(0.05))
      .force("y", d3.forceY(this.height / this.forceY).strength(0.05))
      .force(
        "collide",
        d3.forceCollide(d => {
          return radiusScale(d.score) + 1;
        })
      )
      .alphaDecay([0.001]);

    const svg = d3.select("#d3_display");

    svg.selectAll("g").remove();

    const group = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("id", function(d) {
        return d.word;
      })
      .call(drag);

    group
      .append("circle")
      .attr("r", 5)
      .attr("fill", d => {
        return d.sentiment === "negative"
          ? color(-1 * d.score)
          : d.sentiment === "positive" ? color(d.score) : "lightgreen";
      });

    group
      .append("text")
      .classed("word", true)
      .attr("text-anchor", "middle")
      .text(d => `${d.word}`);

    group
      .append("text")
      .attr("class", "score")
      .attr("text-anchor", "middle")
      .attr("dy", d => 0.7 * radiusScale(d.score))
      .text(d => ` ${this.format(d.score)}`)
      .attr("fill", "white");

    insertTitle(this.width, this.height);
    infoBox(this.width, this.height, this.props.values);

    const nodesCircles = d3.selectAll("circle");
    const nodesTexts = d3.selectAll(".word, .score");

    //trying axis
    console.log("min and max", minSize, maxSize);
    const x = d3
      .scaleLinear()
      .domain([-minSize, maxSize])
      .range([-10, 10]);

    const axis = svg.append("g").attr("class", axis);
    //axis.call(d3.axisRight(x));

    const ticked = () => {
      radius += 2;
      fontSize += 1;
      nodesCircles
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => {
          return radius >= radiusScale(d.score) ? radiusScale(d.score) : radius;
        });
      nodesTexts
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("style", d => {
          return fontSize >= radiusScale(d.score) / 2
            ? `font-size: ${radiusScale(d.score) / 2}`
            : `font-size: ${fontSize}px`;
        });
    };
    simulation.nodes(data).on("tick", ticked);
  }

  render() {
    console.log("this.props", this.props.values);
    if (Object.keys(this.props.values).length !== 0) {
      this.initialise();
    }
    return <svg id="d3_display" />;
  }
}

const mapStateToProps = state => {
  return {
    values: state.processedData.processedData
  };
};

export default connect(mapStateToProps)(Circles);
