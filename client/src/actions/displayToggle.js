import { DISPLAY_TOGGLE } from "./types";

export function changeDisplay(displayType) {
  let resetToggle = {
    about: false,
    analysis: false,
    manual: false
  };
  resetToggle[displayType] = true;
  return function(dispatch) {
    dispatch({
      type: DISPLAY_TOGGLE,
      payload: {
        ...resetToggle
      }
    });
  };
}
