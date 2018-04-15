import React, { Component } from "react";
import * as d3 from "d3";

class Circles extends Component {
  width = 0.6 * window.innerWidth;
  height = 0.8 * window.innerHeight;
  data = JSON.parse(this.props.values).slice(0, 15);
  data = this.data.slice(0, 15);
  scaleIt = this.height;
  radius = 4;
  fontSize = 4;
  t = d3.transition().duration(500);
  forceX = 2;
  forceY = 2.5;
  radiusX = 30;
  radiusY = 10;
  minSize = this.data[this.data.length - 1].score;
  maxSize = this.data[0].score;

  radiusScale = d3
    .scaleSqrt()
    .domain([this.minSize, this.maxSize])
    .range([this.scaleIt / this.radiusX, this.scaleIt / this.radiusY]);

  simulation = d3
    .forceSimulation()
    .force("x", d3.forceX(this.width / this.forceX).strength(0.05))
    .force("y", d3.forceY(this.height / this.forceY).strength(0.05))
    .force(
      "collide",
      d3.forceCollide(d => {
        return this.radiusScale(d.score) + 1;
      })
    )
    .alphaDecay([0.001]);

  componentDidMount() {
    console.log("componentDidMount was called");
    const svg = d3.select("#d3_display");
    const group = svg
      .selectAll("g")
      .data(this.data)
      .enter()
      .append("g")
      .attr("id", function(d) {
        return d.word;
      });

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
      this.radius += 2;
      this.fontSize += 1;
      nodesCircles
        .attr("cx", d => {
          return d.x;
        })
        .attr("cy", d => {
          return d.y;
        })
        .attr("r", d => {
          if (this.radius >= this.radiusScale(d.score)) {
            return this.radiusScale(d.score);
          }
          return this.radius;
        });
    };
    this.simulation.nodes(this.data).on("tick", ticked);
  }

  render() {
    console.log("d3js was called");
    return <svg id="d3_display" />;
  }
}

export default Circles;
