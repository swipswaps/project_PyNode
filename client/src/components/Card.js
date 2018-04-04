import React, { Component } from "react";
import { MultipleArticles } from "./SingularArticle";
import { guardianRequest } from "../utils/fetch";

const fake_data = {
  article: {
    webTitle:
      "Putin blames criminal negligence for death toll in Kemerovo fire",
    webUrl:
      "https://www.theguardian.com/world/2018/mar/27/putin-blames-criminal-negligence-for-death-toll-in-kemerovo-fire"
  }
};

//guardianRequest().then(data => console.log("data", data));

export class Card extends Component {
  state = {
    articles: ""
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
      <div>
        <h1> Guardian articles will be displayed here </h1>
        <MultipleArticles articles={this.state.articles} />
      </div>
    );
  }
}
