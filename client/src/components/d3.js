import React, { Component } from "react";
import * as d3 from "d3";

class Circles extends Component {
  width = 0.6 * window.innerWidth;
  height = 0.8 * window.innerHeight;
  scaleIt = this.height;
  radius = 4;
  fontSize = 4;
  t = d3.transition().duration(500);
  forceX = 2;
  forceY = 2.5;
  radiusX = 30;
  radiusY = 10;

  initialise() {
    function dragstarted(d) {
      let test = d3
        .select(this)
        .raise()
        .classed("active", true);
    }

    function dragged(d) {
      d3
        .select(this)
        .attr("cx", (d.x = d3.event.x))
        .attr("cy", (d.y = d3.event.y));
    }

    function dragended(d) {
      d3.select(this).classed("active", false);
    }

    const drag = d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    let data = JSON.parse(this.props.values).slice(0, 15);
    data = data.slice(0, 15);

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

    const delCircles = svg.selectAll("g").remove();

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
      .attr("cx", this.width / 2)
      .attr("cy", this.height / 2)
      .attr("r", 5)
      .attr("fill", d => {
        return d.color;
      });

    const nodesCircles = d3.selectAll("circle");

    const ticked = () => {
      radius += 2;
      fontSize += 1;
      nodesCircles
        .attr("cx", d => {
          return d.x;
        })
        .attr("cy", d => {
          return d.y;
        })
        .attr("r", d => {
          if (radius >= radiusScale(d.score)) {
            return radiusScale(d.score);
          }
          return radius;
        });
    };
    simulation.nodes(data).on("tick", ticked);
  }

  componentDidMount() {
    this.initialise();
  }

  componentDidUpdate() {
    this.initialise();
  }

  render() {
    return <svg id="d3_display" />;
  }
}

export default Circles;
