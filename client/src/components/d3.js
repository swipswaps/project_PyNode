import React, { Component } from "react";
import * as d3 from "d3";

class Circles extends Component {
  height = 300;
  width = 300;

  randomColor(colorScheme) {
    return colorScheme[Math.floor(Math.random() * colorScheme.length)];
  }

  componentDidMount() {
    const svg = d3.select("." + this.props.name);

    svg
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.height / 2})`)
      .selectAll("circle")
      .data(this.props.values)
      .enter()
      .append("circle");

    svg
      .selectAll("circle")
      .attr("cx", d => {
        return Math.floor(Math.random() * this.width) - this.width / 2;
      })
      .attr("cy", d => {
        return Math.floor(Math.random() * this.height) - this.height / 2;
      })
      .attr("r", d => {
        return d * 10;
      })
      .attr("fill", d => {
        return this.randomColor(d3.schemeSet1);
      });
  }

  componentDidUpdate() {
    console.log("this.props.data", this.props.values);
    const svg = d3
      .select("." + this.props.name)
      .selectAll("circle")
      .data(this.props.values)
      // .enter()
      .transition()
      .duration(1000)
      .attr("r", d => {
        return d * 10;
      });
    console.log("svg", svg);
  }

  render() {
    return (
      <svg
        className={this.props.name}
        width={this.width}
        height={this.height}
      />
    );
  }
}

export default Circles;
