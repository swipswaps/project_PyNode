import { combineReducers } from "redux";
import guardianFetchReducer from "./guardianFetchReducer";
import mainDisplayReducer from "./mainDisplayReducer";
import fetchProcessedData from "./fetchProcessedData";
import searchBarToggle from "./searchBarToggleReducer";

export default combineReducers({
  articles: guardianFetchReducer,
  processedData: fetchProcessedData,
  toggle: mainDisplayReducer,
  advancedSearch: searchBarToggle
});
