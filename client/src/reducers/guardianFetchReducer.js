import { FETCH_GUARDIAN, FETCH_PROCESSED_DATA } from "../actions/types";

const initialState = {
  articles: [],
  processedData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GUARDIAN:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_PROCESSED_DATA:
      return {
        ...state,
        processedData: action.payload
      };

    default:
      return state;
  }
}
