import { NAVBAR_TOGGLE } from "./types";

export function displayAbout() {
  return function(dispatch) {
    dispatch({
      type: NAVBAR_TOGGLE,
      payload: {
        analysis: false,
        instruction: false,
        about: true
      }
    });
  };
}
