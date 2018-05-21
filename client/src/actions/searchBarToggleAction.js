import { SEARCH_BAR_TOGGLE } from "./types.js";

export const searchBarToggle = () => (dispatch, getState) => {
  console.log("getState", getState().advancedSearch);
  let toggle = getState().advancedSearch.toggle;
  dispatch({
    type: SEARCH_BAR_TOGGLE,
    payload: !toggle
  });
};
