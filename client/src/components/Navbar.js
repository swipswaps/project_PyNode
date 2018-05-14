import React, { Component } from "react";
import { connect } from "react-redux";
import { displayAbout } from "../actions/navbarToggle";

class Navbar extends Component {
  updateToggle = () => {
    console.log("this.props.toggle", this.props.toggle);
    this.props.displayAbout();
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <a href="#" onClick={this.updateToggle}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">Instruction</a>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.navToggle.toggle
});

export default connect(mapStateToProps, { displayAbout })(Navbar);
