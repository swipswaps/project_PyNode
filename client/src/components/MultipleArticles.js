import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";
import { fetchProcessedData } from "../actions/fetchProcessedDataAction";
import { displayTitle } from "../actions/articleTtitleAction";
import { changeDisplay } from "../actions/displayToggleAction";

const SingularArticle = ({ article: { webTitle, webUrl, id } }) => {
  return (
    <a href={webUrl} target="_blank">
      <p>{webTitle}</p>
    </a>
  );
};

class MultipleArticles extends Component {
  displayViz = index => {
    let title = this.props.articles[index].webTitle;
    let articleId = this.props.articles[index].id;
    this.props.fetchProcessedData(articleId);
    this.props.displayTitle(title);
    this.props.changeDisplay("analysis");
  };

  componentWillMount() {
    const { dispatch } = this.props;
    this.props.fetchGuardian();
  }

  render() {
    return (
      <div className="titlesCon">
        {this.props.articles.map((art, i) => {
          return (
            <div key={i} className="sidebarItem">
              <SingularArticle article={art} />
              <button
                className="analyseBtn"
                onClick={() => this.displayViz(i)}
                article={art}
              >
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
  return {
    articles: state.articles.articles,
    prrocessedData: state.processedData.processedData,
    toggle: state.toggle.toggle
  };
};

export default connect(mapStateToProps, {
  fetchGuardian,
  fetchProcessedData,
  displayTitle,
  changeDisplay
})(MultipleArticles);
