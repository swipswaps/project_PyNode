import {
  RECEIVE_PROCESSED_DATA,
  REQUEST_PROCESSED_DATA
} from "../actions/types";

const initialState = {
  isFetching: false,
  processedData: {},
  articleId: ""
};

const fetchProcessedData = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROCESSED_DATA:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROCESSED_DATA:
      return {
        ...state,
        isFetching: false,
        processedData: action.payload
      };
    default:
      return state;
  }
};

export default fetchProcessedData;
