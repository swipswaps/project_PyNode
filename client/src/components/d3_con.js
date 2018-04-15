import React, { Component } from "react";
import Circles from "./d3";

class D3_container extends Component {
  render() {
    console.log("d3 container render was called");
    if (!this.props.values) {
      return <div>Nothing to display</div>;
    }
    return <Circles name={this.props.name} values={this.props.values} />;
  }
}

export default D3_container;
