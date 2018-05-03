import { FETCH_PROCESSED_DATA } from "../actions/types";

const initialState = {
  processedData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROCESSED_DATA:
      return {
        ...state,
        processedData: action.payload
      };

    default:
      return state;
  }
}
