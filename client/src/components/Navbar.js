import React, { Component } from "react";
import { connect } from "react-redux";
import { changeDisplay } from "../actions/displayToggle";

class Navbar extends Component {
  updateToggle = displayType => {
    this.props.changeDisplay(displayType);
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <a href="#" onClick={() => this.updateToggle("about")}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" onClick={() => this.updateToggle("manual")}>
              Manual
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.disToggle.toggle
});

export default connect(mapStateToProps, { changeDisplay })(Navbar);
