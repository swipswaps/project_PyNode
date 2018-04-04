import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("./utils/fetch");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
