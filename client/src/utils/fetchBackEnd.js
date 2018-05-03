export const sendData = async (url, data) => {
  console.log("i have been called");
  const response = await fetch(url, {
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    method: "POST"
  });
  const json = await response.json();
  return json;
};
