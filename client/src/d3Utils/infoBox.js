import * as d3 from "d3";

export const infoBox = (width, height, info) => {
  const boxHeight = 0.4 * height;

  let svg = d3
    .select("svg")
    .append("g")
    .attr("transform", `translate(${0.01 * width}, ${0.15 * height})`)
    .attr("class", "infoBox");

  let publData = svg
    .append("text")
    .attr("alignment-baseline", "hanging")
    .text(`publication date: ${info.webPublicationDate}`)
    .style("font-size", "1rem");

  let section = svg
    .append("text")
    .attr("alignment-baseline", "hanging")
    .attr("y", "1.5rem")
    .text(`section: ${info.sectionName}`)
    .style("font-size", "1rem");

  let wordCount = svg
    .append("text")
    .attr("alignment-baseline", "hanging")
    .attr("y", "3rem")
    .text(`word count: ${info.wordCount}`)
    .style("font-size", "1rem");
};
