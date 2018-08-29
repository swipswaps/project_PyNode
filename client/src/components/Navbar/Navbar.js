import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplay } from '../../actions/displayToggleAction';

class Navbar extends Component {
  updateToggle = displayType => {
    this.props.changeDisplay(displayType);
  };

  render() {
    return (
      <nav className="navbar">
        <div className="buttons">
          <a
            href="#about"
            className="navbar__item btn-link"
            onClick={() => this.updateToggle('about')}
          >
            About
          </a>
          <a
            href="#manual"
            className="navbar__item btn-link btn-text-red"
            onClick={() => this.updateToggle('manual')}
          >
            Manual
          </a>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.toggle.toggle
});

export default connect(mapStateToProps, { changeDisplay })(Navbar);
