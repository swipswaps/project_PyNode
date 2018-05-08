import { ARTICLE_TITLE } from "./types";

export function displayTitle(title) {
  return function(dispatch) {
    dispatch({
      type: ARTICLE_TITLE,
      payload: title
    });
  };
}
