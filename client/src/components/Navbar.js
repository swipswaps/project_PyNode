import React, { Component } from "react";
import { connect } from "react-redux";
import { changeDisplay } from "../actions/displayToggle";

class Navbar extends Component {
  updateToggle = () => {
    console.log("this.props.toggle", this.props.toggle);
    this.props.changeDisplay("about");
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
  toggle: state.disToggle.toggle
});

export default connect(mapStateToProps, { changeDisplay })(Navbar);
