import React from "react";
import D3_container from "./d3_con";

const SingularArticle = ({ article: { webTitle, webUrl } }) => {
  return (
    <div>
      <a href={webUrl}>
        <h2>{webTitle}</h2>
      </a>
    </div>
  );
};

export const MultipleArticles = props => {
  console.log("props", props);
  return (
    <div>
      {props.articles.map((art, i) => {
        return (
          <div key={i}>
            <SingularArticle article={art} />
            <D3_container name={"svg_" + i} />
          </div>
        );
      })}
    </div>
  );
};
