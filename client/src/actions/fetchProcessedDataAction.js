import { RECEIVE_PROCESSED_DATA, REQUEST_PROCESSED_DATA } from "./types";
import { sendData } from "../utils/fetchBackEnd";

export const requestProcessedData = articleId => ({
  type: REQUEST_PROCESSED_DATA,
  payload: articleId
});

const shouldFetchPosts = (state, articleId) => {
  console.log("state", state.processedData.articleId);
  return true;
};

export const receiveProcessedData = (result, processedData) => ({
  type: RECEIVE_PROCESSED_DATA,
  payload: {
    sectionName: processedData.sectionName,
    webPublicationDate: processedData.webPublicationDate,
    result: result.payload.result,
    wordCount: result.payload.wordCount
  }
});

export const fetchProcessedData = articleId => (dispatch, getState) => {
  dispatch(requestProcessedData(articleId));
  if (shouldFetchPosts(getState(), articleId)) {
    sendData("/react", { articleID: articleId }).then(processedData => {
      let pythonOutput = JSON.parse(processedData.result);
      dispatch(receiveProcessedData(pythonOutput, processedData));
    });
  }
};
