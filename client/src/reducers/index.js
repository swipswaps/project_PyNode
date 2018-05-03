import { combineReducers } from "redux";
import guardianFetchReducer from "./guardianFetchReducer";
import processedDatareducer from "./processedDataReducer";

export default combineReducers({
  articles: guardianFetchReducer,
  processedData: processedDatareducer
});
