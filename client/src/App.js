import React, { Component } from "react";
import { Card } from "./components/Card";

const Header = () => <h1> Guardian articles will be displayed here </h1>;

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
