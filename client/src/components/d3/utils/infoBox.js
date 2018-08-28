import * as d3 from 'd3';

export const infoBox = (width, height, info) => {
  let publicationDate = info.webPublicationDate.replace(/T.*/g, '');
  let publicationTime = info.webPublicationDate.replace(/\*T/g, '');

  let svg = d3
    .select('svg')
    .append('g')
    .attr('transform', `translate(${0.05 * width}, ${0.2 * height})`)
    .attr('class', 'infoBox')
    .style('font', '1rem ubuntu');

  let publData = svg
    .append('text')
    .attr('alignment-baseline', 'hanging')
    .text(`publication date: ${publicationDate}`)
    .style('font-size', '1.6rem');

  let section = svg
    .append('text')
    .attr('alignment-baseline', 'hanging')
    .attr('y', '1.5rem')
    .text(`section: ${info.sectionName}`)
    .style('font-size', '1.6rem');

  let wordCount = svg
    .append('text')
    .attr('alignment-baseline', 'hanging')
    .attr('y', '3rem')
    .text(`word count: ${info.wordCount}`)
    .style('font-size', '1.6rem');
};
