import { FETCH_GUARDIAN } from "./types";
import { guardianRequest } from "../utils/fetchGuard";

export function fetchGuardian() {
  return function(dispatch) {
    console.log("fetching");
    guardianRequest().then(articles =>
      dispatch({
        type: FETCH_GUARDIAN,
        payload: articles.response.results
      })
    );
  };
}
