import React, { Component } from "react";
import { MultipleArticles } from "./SingularArticle";
import { guardianRequest } from "../utils/fetchGuard";
import { D3_container } from "./d3_con";

const Tester = props => {
  return <p className="d3_display">{props.articleText}</p>;
};

const Header = () => <h1> Guardian latest </h1>;

class SearchBar extends Component {
  state = {
    search: "",
    arrayArticles: ""
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  searchRequest = event => {
    event.preventDefault();
    guardianRequest(this.state.search)
      //.then(data => console.log("data", data));
      .then(data => {
        //   this.setState({ arrayArticles: data.response.results });
        this.props.onSearch(data.response.results);
      });
  };

  render() {
    return (
      <form>
        <input
          id="textInput"
          className="searchBar"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button onClick={this.searchRequest}>search</button>
      </form>
    );
  }
}

export class Card extends Component {
  state = {
    articles: "",
    articleText: "TEST"
  };

  componentDidMount() {
    guardianRequest().then(data => {
      this.setState({ articles: data.response.results });
    });
  }

  handleTextUpdate = text => {
    this.setState({ articleText: text });
  };

  handleArrArticlesUpdate = array => {
    console.log("i was called", array);
    //this.articles = array;
    this.setState({ articles: array });
  };

  render() {
    console.log("this.props", this.articles);
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
          <Tester articleText={this.state.articleText} />
        </div>
      </div>
    );
  }
}
