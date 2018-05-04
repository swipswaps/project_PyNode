import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";
import { fetchProcessedData } from "../actions/fetchProcessedDataAction";

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

  changeData = index => {
    let articleId = this.props.articles[index].id;
    this.props.fetchProcessedData(articleId);
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
              <button onClick={() => this.changeData(i)} article={art}>
                analise
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  prrocessedData: state.processedData.processedData
});

export default connect(mapStateToProps, { fetchGuardian, fetchProcessedData })(
  MultipleArticles
);
