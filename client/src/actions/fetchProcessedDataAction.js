import { FETCH_PROCESSED_DATA } from "./types";
import { sendData } from "../utils/fetchBackEnd";

export function fetchProcessedData(articleId) {
  return function(dispatch) {
    sendData("/react", { articleID: articleId }).then(processedData => {
      let pythonOutput = JSON.parse(processedData.result);
      dispatch({
        type: FETCH_PROCESSED_DATA,
        payload: {
          sectionName: processedData.sectionName,
          webPublicationDate: processedData.webPublicationDate,
          result: pythonOutput.payload.result,
          wordCount: pythonOutput.payload.wordCount
        }
      });
    });
  };
}
