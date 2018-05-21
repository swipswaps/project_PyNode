import React, { Component } from "react";
import { connect } from "react-redux";
import { searchBarToggle } from "../actions/searchBarToggleAction";

class AdvancedSearch extends Component {
  state = {
    search: "",
    fromDate: "",
    toDate: "",
    section: ""
  };

  handleChange = event => {
    event.preventDefault();
  };

  switchToggle = event => {
    event.preventDefault();
    this.props.searchBarToggle();
  };

  render() {
    return (
      <div className="searchForm">
        <form action="">
          <input type="text" />
          <input type="date" />
          <input type="date" />
          <button>search</button>
          <button onClick={this.switchToggle}>basic search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.advancedSearch.toggle
});

export default connect(mapStateToProps, { searchBarToggle })(AdvancedSearch);
