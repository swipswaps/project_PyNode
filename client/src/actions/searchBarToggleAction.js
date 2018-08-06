import { SEARCH_BAR_TOGGLE } from "./types.js";

export const searchBarToggle = () => (dispatch, getState) => {
  let toggle = getState().advancedSearch.toggle;
  dispatch({
    type: SEARCH_BAR_TOGGLE,
    payload: !toggle
  });
};
