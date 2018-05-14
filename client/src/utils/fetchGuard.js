import { GUARDIAN_KEY } from "../token";

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let date = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${dd < 10 ? "0" + dd : dd}`;

const guardian_path = "http://content.guardianapis.com/search?";
const guardian_key = `&order-by=relevance&show-fields=bodyText,trailText&section=commentisfree&from-date=${
  date
}&show-section=true&api-key=${GUARDIAN_KEY}`;

export const guardianRequest = async search => {
  const path = search
    ? guardian_path + "q=" + search + guardian_key
    : guardian_path + guardian_key;

  const res = await fetch(path);
  const json = await res.json();
  return json;
};
