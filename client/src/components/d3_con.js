import React, { Component } from "react";
import Circles from "./d3";

class D3_container extends Component {
  state = {
    values: [1, 2, 3, 4]
  };

  sendData = async (url, data) => {
    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    });
    const json = await response.json();
    return json;
  };

  changeData = () => {
    this.setState({ values: [4, 3, 2, 1] });
    console.log("this.props.article_name", this.props.article_name);
    this.sendData("/react", { articleID: this.props.article_name.id }).then(
      data => console.log("data", data)
    );
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
