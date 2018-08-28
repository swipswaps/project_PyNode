import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayTitle } from '../actions/articleTtitleAction';
import LoadingPage from './LoadingPage';

class Title extends Component {
  render() {
    const { isFetching } = this.props;
    return (
      <div className="title">
        {isFetching && <LoadingPage />}
        {!isFetching && (
          <h3 className="heading-tertiary">{this.props.title}</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.toggle.title,
  isFetching: state.processedData.isFetching
});
export default connect(mapStateToProps, { displayTitle })(Title);
