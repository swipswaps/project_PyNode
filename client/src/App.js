import React, { Component } from "react";
import MultipleArticles from "./components/SingularArticle";
import { guardianRequest } from "./utils/fetchGuard";
import Circles from "./components/d3";
import { SearchBar } from "./components/SearchBar";
import store from "./store";
import { Provider } from "react-redux";

const Header = () => <h1> Guardian latest </h1>;

export class App extends Component {
  state = {
    //articles: "",
    articleText: ""
  };

  // componentDidMount() {
  //   guardianRequest().then(data => {
  //     this.setState({ articles: data.response.results });
  //   });
  // }

  handleTextUpdate = text => {
    this.setState({ articleText: text });
  };

  handleArrArticlesUpdate = array => {
    this.setState({ articles: array });
  };

  render() {
    // if (!this.state.articles) {
    //   return <h3>it takes too long</h3>;
    // }
    return (
      <Provider store={store}>
        <div className="root">
          <div className="header">
            <Header />
            <SearchBar onSearch={this.handleArrArticlesUpdate} />
          </div>
          <div className="pageCon">
            <MultipleArticles
              articles={this.state.articles}
              onTextUpdate={this.handleTextUpdate}
              className="sidebar"
            />
            {this.state.articleText && (
              <Circles values={this.state.articleText} />
            )}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
