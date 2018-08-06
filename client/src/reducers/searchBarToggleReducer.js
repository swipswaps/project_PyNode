import { SEARCH_BAR_TOGGLE } from "../actions/types";

const initialState = {
  toggle: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BAR_TOGGLE:
      return {
        ...state,
        toggle: action.payload
      };
    default:
      return state;
  }
}
