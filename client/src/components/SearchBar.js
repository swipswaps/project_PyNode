import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";

class SearchBar extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  searchRequest = event => {
    event.preventDefault();
    this.props.fetchGuardian(this.state.search);
  };

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            id="textInput"
            className="searchBar"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button onClick={this.searchRequest}>search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps, { fetchGuardian })(SearchBar);
