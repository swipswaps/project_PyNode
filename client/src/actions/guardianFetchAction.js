import { FETCH_GUARDIAN } from "./types";
import { guardianRequest } from "../utils/fetchGuard";

export function fetchGuardian(search) {
  return function(dispatch) {
    guardianRequest(search).then(articles =>
      dispatch({
        type: FETCH_GUARDIAN,
        payload: articles.response.results
      })
    );
  };
}
