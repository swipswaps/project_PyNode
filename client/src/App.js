import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import MultipleArticles from "./components/MultipleArticles";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import MainDisplay from "./components/MainDisplay";

export class App extends Component {
  state = {
    articleText: ""
  };

  handleTextUpdate = text => {
    this.setState({ articleText: text });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <Navbar />
          <div className="header">
            <h1> the Guardian latest </h1>
            <SearchBar onSearch={this.handleArrArticlesUpdate} />
          </div>
          <div className="pageCon">
            <MultipleArticles
              onTextUpdate={this.handleTextUpdate}
              className="sidebar"
            />
            <MainDisplay />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
