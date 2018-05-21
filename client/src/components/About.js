import React, { Component } from "react";
import profilePhoto from "../assets/profilePhotoCropped.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="manual">
        <h2>About</h2>
        <img
          src={profilePhoto}
          alt="photo of Pavel"
          width="400px"
          align="right"
        />
        <p>
          <span>Pavel Rodionov</span>
        </p>
      </div>
    );
  }
}
