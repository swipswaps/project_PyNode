import React, { Component } from "react";
import { connect } from "react-redux";
import { displayTitle } from "../actions/articleTtitleAction";
import LoadingPage from "./LoadingPage";

class Title extends Component {
  render() {
    const { isFetching } = this.props;
    return (
      <div className="title">
        {isFetching && <LoadingPage />}
        {!isFetching && <h2>{this.props.title}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.toggle.title,
  isFetching: state.processedData.isFetching
});
export default connect(mapStateToProps, { displayTitle })(Title);
