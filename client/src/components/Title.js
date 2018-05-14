import React, { Component } from "react";
import { connect } from "react-redux";
import { displayTitle } from "../actions/articleTtitleAction";

class Title extends Component {
  render() {
    return (
      <div className="title">
        {this.props.title ? <h2>{this.props.title}</h2> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title.title
});
export default connect(mapStateToProps, { displayTitle })(Title);
