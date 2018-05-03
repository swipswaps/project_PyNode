export const sendData = async (url, data) => {
  console.log("url", url);
  console.log("data", data);
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
