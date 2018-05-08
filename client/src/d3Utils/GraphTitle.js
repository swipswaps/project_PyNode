import * as d3 from "d3";

export const insertTitle = () => {
  let svg = d3.select("svg");
  svg
    .append("text")
    .text("The most influencial words in the article")
    //.attr("anchor-text", "middle")
    .attr("fill", "black")
    .attr("x", "20px")
    .attr("y", "20px")
    .style("font-size", "1.5rem");
};
