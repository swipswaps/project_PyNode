import { combineReducers } from "redux";
import guardianFetchReducer from "./guardianFetchReducer";

export default combineReducers({
  articles: guardianFetchReducer,
  processedData: guardianFetchReducer,
  title: guardianFetchReducer,
  disToggle: guardianFetchReducer
});
