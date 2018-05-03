import React, { Component } from "react";
import { sendData } from "../utils/fetchBackEnd";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";

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
    sendData("/react", { articleID: this.props.articles[index].id }).then(
      data => {
        this.props.onTextUpdate(data.result);
      }
    );
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
                pressMe
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles //first articles is from root reducer and second from guard reducer
});

export default connect(mapStateToProps, { fetchGuardian })(MultipleArticles);
