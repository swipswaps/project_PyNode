import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import { insertTitle } from "../d3Utils/GraphTitle";
import { infoBox } from "../d3Utils/infoBox";
import { createLegendPoints } from "../d3Utils/chartLegend";
import { colorPicker } from "../d3Utils/colorPicker";
import LoadingPage from "./LoadingPage";

class Circles extends Component {
  width = 0.6 * window.innerWidth;
  height = 0.8 * window.innerHeight;
  scaleIt = this.height;
  t = d3.transition().duration(1000);
  precision = d3.precisionFixed(0.1);
  format = d3.format("." + this.precision + "f");
  forceX = 2;
  forceY = 2;
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

    let radius = 4,
      fontSize = 4;

    let data = this.props.values.result;

    let minSize = data[data.length - 1].score;
    let maxSize = data[0].score;

    //trying colours

    let color = d3
      .scaleSequential(d3.interpolateRdYlGn)
      .domain([-maxSize, maxSize]);

    //-----------------------------------------------------------------------

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
      .attr("class", "influenceCircle")
      .attr("id", function(d) {
        return d.word;
      })
      .call(drag);

    group
      .append("circle")
      .attr("class", "visible")
      .attr("r", 5)
      .attr("fill", d => {
        return colorPicker(d, color);
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

    group
      .append("circle")
      .attr("class", "invisible")
      .attr("r", 5)
      .attr("opacity", 0);

    insertTitle(this.width, this.height);
    infoBox(this.width, this.height, this.props.values);

    const nodesCircles = d3.selectAll(".visible, .invisible");
    const nodesTexts = d3.selectAll(".word, .score");
    const nodesG = d3.selectAll(".invisible");

    const handleMouseOver = function(d, i) {
      let dataPoint = d;
      let tooltip = svg
        .append("g")
        .attr("class", "tooltip")
        .attr(
          "transform",
          `translate(${d.x - radiusScale(d.score)}, ${d.y -
            radiusScale(d.score)})`
        );

      let foreignObject = tooltip
        .append("foreignObject")
        .attr("class", "tooltipFo")
        .attr("width", "30vw");

      let tooltipContainer = foreignObject
        .append("xhtml:div")
        .style("background-color", "#FFCFB3")
        .attr("class", "tooltipDiv");

      const displaySentences = () => {
        let numSentences = Math.min(3, d.sentences.length);
        for (let i = 0; i < numSentences; i++) {
          let sentence = d.sentences[i];
          tooltipContainer
            .append("p")
            .attr("class", "tooltipP")
            .text(`    ${i + 1}. ${sentence}`);
        }
      };
      displaySentences();
      let foHeight = tooltipContainer._groups[0][0].getBoundingClientRect()
        .height;
      let foWidth = tooltipContainer._groups[0][0].getBoundingClientRect()
        .width;

      foreignObject
        .attr("height", foHeight)
        .attr("x", -foWidth / 2)
        .attr("y", -foHeight);
    };

    const handelMouseOut = function(d, i) {
      d3.select(".tooltip").remove();
    };
    nodesG.on("mouseover", handleMouseOver);
    d3.selectAll(".invisible").on("mouseout", handelMouseOut);

    //trying axis -----------------------------
    const x = d3
      .scaleLinear()
      .domain([-maxSize, maxSize])
      .rangeRound([0.5 * this.height, 0.05 * this.height]);

    const axis = svg
      .append("g")
      .classed("legend", true)
      .style("font", "1rem ubuntu")
      .attr(
        "transform",
        `translate(${0.95 * this.width}, ${0.2 * this.height})`
      );

    let gridData = createLegendPoints(-maxSize, maxSize, 9, color);

    axis
      .selectAll("rect")
      .data(gridData)
      .enter()
      .append("rect")
      .attr("height", 0.05 * this.height)
      .attr("y", d => 0.05 * this.height * (d.id + 1))
      .attr("width", 0.05 * this.height)
      .attr("fill", d => d.color);

    axis
      .append("text")
      .text("word sentiment")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "hanging")
      .attr("fill", "black")
      .style("font-weight", "bold");

    axis
      .append("text")
      .text("positive")
      .attr("alignment-baseline", "middle")
      .attr("x", "-4rem")
      .attr("y", 0.05 * this.height)
      .attr("fill", "black");

    axis
      .append("text")
      .text("negative")
      .attr("alignment-baseline", "middle")
      .attr("x", "-4rem")
      .attr("y", 10 * 0.05 * this.height)
      .attr("fill", "black");

    axis
      .append("text")
      .text("neutral")
      .attr("alignment-baseline", "middle")
      .attr("x", "-4rem")
      .attr("y", 5.5 * 0.05 * this.height)
      .attr("fill", "black");

    axis
      .call(
        d3
          .axisRight(x)
          .ticks(1)
          .tickValues([-maxSize, 0, maxSize])
          .tickSize(0.05 * this.height + 2)
      )
      .select(".domain")
      .remove();

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
    const { isFetching } = this.props;
    const isEmpty = Object.keys(this.props.values).length === 0;

    if (!isEmpty) {
      d3
        .select("svg")
        .selectAll("*")
        .remove();
      this.initialise();
    }
    return (
      <div>
        <svg id="d3_display" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.processedData.processedData,
    isFetching: state.processedData.isFetching
  };
};

export default connect(mapStateToProps)(Circles);
