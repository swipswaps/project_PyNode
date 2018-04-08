import React, { Component } from "react";
import { MultipleArticles } from "./SingularArticle";
import { guardianRequest } from "../utils/fetchGuard";
import { D3_container } from "./d3_con";

//guardianRequest().then(data => console.log("data", data));

const Tester = props => {
  return <p className="d3_display">{props.articleText}</p>;
};

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

  render() {
    console.log("handleTextUpdate ", typeof this.handleTextUpdate);
    if (!this.state.articles) {
      return <h3>it takes too long</h3>;
    }
    return (
      <div className="pageCon">
        <MultipleArticles
          articles={this.state.articles}
          onTextUpdate={this.handleTextUpdate}
          className="sidebar"
        />
        <Tester articleText={this.state.articleText} />
      </div>
    );
  }
}
