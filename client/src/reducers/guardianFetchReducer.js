import {
  FETCH_GUARDIAN,
  FETCH_PROCESSED_DATA,
  ARTICLE_TITLE
} from "../actions/types";

const initialState = {
  articles: [],
  processedData: {},
  title: ""
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
    case ARTICLE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
