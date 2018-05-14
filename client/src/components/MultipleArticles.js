import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";
import { fetchProcessedData } from "../actions/fetchProcessedDataAction";
import { displayTitle } from "../actions/articleTtitleAction";
import { changeDisplay } from "../actions/displayToggle";

const SingularArticle = ({ article: { webTitle, webUrl, id } }) => {
  return (
    <a href={webUrl}>
      <p>{webTitle}</p>
    </a>
  );
};

class MultipleArticles extends Component {
  state = {
    articleText: ""
  };

  displayViz = index => {
    let title = this.props.articles[index].webTitle;
    let articleId = this.props.articles[index].id;
    this.props.fetchProcessedData(articleId);
    this.props.displayTitle(title);
    this.props.changeDisplay("analysis");
  };

  componentWillMount() {
    this.props.fetchGuardian();
  }

  render() {
    return (
      <div className="titlesCon">
        {this.props.articles.map((art, i) => {
          return (
            <div key={i} className="sidebarItem">
              <SingularArticle article={art} />
              <button onClick={() => this.displayViz(i)} article={art}>
                Analyse
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    articles: state.articles.articles,
    prrocessedData: state.processedData.processedData,
    toggle: state.disToggle.toggle
  };
};

export default connect(mapStateToProps, {
  fetchGuardian,
  fetchProcessedData,
  displayTitle,
  changeDisplay
})(MultipleArticles);
