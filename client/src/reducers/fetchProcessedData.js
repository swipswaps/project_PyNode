import { FETCH_PROCESSED_DATA, REQUEST_PROCESSED_DATA } from "../actions/types";

const initialState = {
  processedData: {},
  articleId: ""
};

const fetchProcessedData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROCESSED_DATA:
      return {
        ...state,
        processedData: action.payload
      };
    case REQUEST_PROCESSED_DATA:
      return {
        ...state,
        articleId: action.payload
      };
    default:
      return state;
  }
};

export default fetchProcessedData;
