import React, { Component } from "react";
import { MultipleArticles } from "./SingularArticle";
import { guardianRequest } from "../utils/fetchGuard";
import { D3_container } from "./d3_con";

//guardianRequest().then(data => console.log("data", data));

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

  render() {
    console.log("this.state.articles", this.state.articles);
    if (!this.state.articles) {
      return <h3>it takes too long</h3>;
    }
    return (
      <div className="pageCon">
        <MultipleArticles articles={this.state.articles} className="sidebar" />
        {/* <Tester /> */}
      </div>
    );
  }
}
