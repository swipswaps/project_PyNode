import React, { Component } from "react";
import Circles from "./d3";

class D3_container extends Component {
  state = {
    values: [1, 2, 3, 4]
  };

  sendData = (url, data) => {
    return fetch(url, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST"
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    //.then(response => console.log("Success", response));
  };

  changeData = () => {
    this.setState({ values: [4, 3, 2, 1] });
    this.sendData("/react", { privet: this.props.article_name.webUrl });
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
