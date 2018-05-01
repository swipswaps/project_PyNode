import { FETCH_GUARDIAN, FETCH_BACKEND } from "../actions/types";

const initialState = {
  articles: [],
  article: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GUARDIAN:
      console.log("reducer");
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
}
