import React, { Component } from "react";
import { guardianRequest } from "../utils/fetchGuard";

export class SearchBar extends Component {
  state = {
    search: "",
    arrayArticles: ""
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  searchRequest = event => {
    event.preventDefault();
    guardianRequest(this.state.search).then(data => {
      this.props.onSearch(data.response.results);
    });
  };

  render() {
    return (
      <form>
        <input
          id="textInput"
          className="searchBar"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button onClick={this.searchRequest}>search</button>
      </form>
    );
  }
}
