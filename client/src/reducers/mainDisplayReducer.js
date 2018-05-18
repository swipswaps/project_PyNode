import { DISPLAY_TOGGLE, ARTICLE_TITLE } from "../actions/types";

const initialState = {
  toggle: {
    manual: true,
    about: false,
    analysis: false,
    awating: false
  },
  title: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case DISPLAY_TOGGLE:
      return {
        ...state,
        toggle: action.payload
      };
    default:
      return state;
  }
}
