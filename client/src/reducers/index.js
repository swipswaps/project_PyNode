import { combineReducers } from "redux";
import guardianFetchReducer from "./guardianFetchReducer";
import mainDisplayReducer from "./mainDisplayReducer";
import fetchProcessedData from "./fetchProcessedData";

export default combineReducers({
  articles: guardianFetchReducer,
  processedData: fetchProcessedData,
  title: mainDisplayReducer,
  disToggle: mainDisplayReducer
});
