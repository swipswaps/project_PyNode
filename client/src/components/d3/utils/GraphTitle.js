import * as d3 from "d3";

export const insertTitle = (width, height) => {
  let svg = d3.select("svg");
  svg
    .append("text")
    .text("The most influencial words in the article")
    .attr("fill", "black")
    .attr("x", width / 2)
    .attr("y", 0.1 * height)
    .attr("text-anchor", "middle")
    .style("font-size", "1.5rem")
    .style("font-family", "ubuntu");
};
