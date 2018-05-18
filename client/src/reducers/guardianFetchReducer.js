import {
  FETCH_GUARDIAN,
  FETCH_PROCESSED_DATA,
  REQUEST_PROCESSED_DATA
} from "../actions/types";

const initialState = {
  articles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GUARDIAN:
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
}
