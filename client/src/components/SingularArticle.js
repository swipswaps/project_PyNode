import React, { Component } from "react";
import { sendData } from "../utils/fetchBackEnd";

const SingularArticle = ({ article: { webTitle, webUrl, id } }) => {
  return (
    <a href={webUrl}>
      <p>{webTitle}</p>
    </a>
  );
};

export class MultipleArticles extends Component {
  state = {
    articleText: ""
  };

  changeData = index => {
    sendData("/react", { articleID: this.props.articles[index].id }).then(
      data => {
        console.log("data", data);
        this.props.onTextUpdate(data.result);
      }
    );
  };

  render() {
    console.log("this.props.arrayArticles", this.props.arrayArticles);
    return (
      <div className="titlesCon">
        {this.props.articles.map((art, i) => {
          return (
            <div key={i} className="sidebarItem">
              <SingularArticle article={art} />
              <button onClick={() => this.changeData(i)} article={art}>
                pressMe
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
