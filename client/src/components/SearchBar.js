import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuardian } from "../actions/guardianFetchAction";
import { searchBarToggle } from "../actions/searchBarToggleAction";
import AdvancedSearch from "./AdvancedSearch";

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

  switchToggle = event => {
    event.preventDefault();
    console.log("switch toggle was called");
    this.props.searchBarToggle();
  };

  render() {
    let toggle = this.props.toggle;
    console.log("toggle", this.props);
    return (
      <div className="searchForm">
        {!toggle ? (
          <form>
            <input
              id="textInput"
              className="searchBar"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button onClick={this.searchRequest}>search</button>
            <button onClick={this.switchToggle}>advanced search</button>
          </form>
        ) : (
          <AdvancedSearch />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  toggle: state.advancedSearch.toggle
});

export default connect(mapStateToProps, { fetchGuardian, searchBarToggle })(
  SearchBar
);
