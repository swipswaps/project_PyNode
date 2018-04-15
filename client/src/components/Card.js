import React, { Component } from "react";
import { MultipleArticles } from "./SingularArticle";
import { guardianRequest } from "../utils/fetchGuard";
import Circles from "./d3";
import D3_container from "./d3_con";
import { SearchBar } from "./SearchBar";

const Tester = props => {
  return <p className="d3_display">{props.articleText}</p>;
};

const Header = () => <h1> Guardian latest </h1>;

export class Card extends Component {
  state = {
    articles: "",
    articleText: ""
  };

  componentDidMount() {
    guardianRequest().then(data => {
      this.setState({ articles: data.response.results });
    });
  }

  handleTextUpdate = text => {
    console.log("i was called article text");
    this.setState({ articleText: text });
  };

  handleArrArticlesUpdate = array => {
    this.setState({ articles: array });
  };

  render() {
    console.log("card js was called");
    if (!this.state.articles) {
      return <h3>it takes too long</h3>;
    }
    return (
      <div>
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
    );
  }
}
