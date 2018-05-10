import { GUARDIAN_KEY } from "../token";

const guardian_path = "http://content.guardianapis.com/search?";
const guardian_key =
  "&order-by=relevance&show-fields=bodyText,trailText&section=commentisfree&from-date=2018-05-01&show-section=true&api-key=" +
  GUARDIAN_KEY;

export const guardianRequest = async search => {
  const path = search
    ? guardian_path + "q=" + search + guardian_key
    : guardian_path + guardian_key;

  const res = await fetch(path);
  const json = await res.json();
  return json;
};
