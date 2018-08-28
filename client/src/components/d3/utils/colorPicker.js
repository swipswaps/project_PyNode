export const colorPicker = (data, color) => {
  return data.sentiment === "negative"
    ? color(-1 * data.score)
    : data.sentiment === "positive" ? color(data.score) : "lightblue";
};
