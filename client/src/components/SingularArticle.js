import React, { Component } from "react";
import { sendData } from "../utils/fetchBackEnd";
import D3_container from "./d3_con";

const SingularArticle = ({ article: { webTitle, webUrl, id } }) => {
  return (
    <a href={webUrl}>
      <p>{webTitle}</p>
    </a>
  );
};

const Tester = props => {
  return <svg className="d3_display" />;
};

export class MultipleArticles extends Component {
  state = {
    articleText: ""
  };

  changeData = index => {
    sendData("/react", { articleID: this.props.articles[index].id }).then(
      data => {
        console.log("data", data);
        this.setState({ articleText: data });
      }
    );
  };

  render() {
    console.log("render was called");
    console.log("articleText", this.state.articleText);
    return (
      <div className="titlesCon">
        {this.props.articles.map((art, i) => {
          return (
            <div key={i} className="sidebarItem">
              <SingularArticle article={art} />
              <button onClick={() => this.changeData(i)} article={art}>
                pressMe
              </button>
              {/* <D3_container name={"svg_" + i} article_name={art} /> */}
            </div>
          );
        })}
        {this.state.articleText ? (
          <p>{this.state.articleText.result}</p>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
