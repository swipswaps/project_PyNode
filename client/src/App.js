import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import MultipleArticles from "./components/MultipleArticles";
import Circles from "./components/d3";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

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
            <div className="main-display">
              <Title />
              <hr />
              <Circles />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
