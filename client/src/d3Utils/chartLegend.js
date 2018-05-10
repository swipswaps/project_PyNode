export const createLegendPoints = (start, end, numberTicks, colorFunc) => {
  let dataPoints = [];
  let step = (end - start) / numberTicks;
  for (let i = 0; i < numberTicks; i++) {
    let dataPoint = {
      id: i,
      start: end - i * step,
      end: end - (i + 1) * step,
      color:
        end - i * step >= 0 && end - (i + 1) * step < 0
          ? "lightblue"
          : colorFunc(end - (i + 1) * step)
    };
    dataPoints.push(dataPoint);
  }
  return dataPoints;
};
