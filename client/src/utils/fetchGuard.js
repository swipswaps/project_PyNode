import { GUARDIAN_KEY } from "../token";

const guardian_path =
  "http://content.guardianapis.com/search?q=putin&order-by=newest&show-fields=bodyText,trailText";
const guardian_key = "&api-key=" + GUARDIAN_KEY;

const path = guardian_path + guardian_key;

export const guardianRequest = async () => {
  const res = await fetch(path);
  const json = await res.json();
  return json;
};
