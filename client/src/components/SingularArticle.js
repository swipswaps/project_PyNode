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
    console.log("index", index);
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
    console.log("this.props", this.props.articles);
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
  articles: state.articles.articles
});

export default connect(mapStateToProps, { fetchGuardian })(MultipleArticles);
