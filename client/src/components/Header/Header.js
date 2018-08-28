import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="heading-primary"> the Guardian latest </h1>
        <SearchBar />
      </div>
    );
  }
}
