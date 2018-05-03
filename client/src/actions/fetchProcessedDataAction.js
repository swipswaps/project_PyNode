import { FETCH_PROCESSED_DATA } from "./types";
import { sendData } from "../utils/fetchBackEnd";

export function fetchProcessedData(articleId) {
  return function(dispatch) {
    sendData("/react", { articleID: articleId }).then(processedData =>
      dispatch({
        type: FETCH_PROCESSED_DATA,
        payload: processedData.result
      })
    );
  };
}
