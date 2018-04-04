import React, { Component } from "react";
import Circles from "./d3";

class D3_container extends Component {
  state = {
    values: [1, 2, 3, 4]
  };

  changeData = () => {
    this.setState({ values: [4, 3, 2, 1] });
  };

  render() {
    return (
      <div>
        <Circles name={this.props.name} values={this.state.values} />
        <button onClick={this.changeData}>changeData</button>
      </div>
    );
  }
}

export default D3_container;
