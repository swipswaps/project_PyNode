import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MultipleArticles from './components/MultipleArticles/MultipleArticles';
//import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainDisplay from './components/MainDisplay/MainDisplay.js';
import AdvancedSearch from './components/AdvancedSearch';
import './App.css';

export class App extends Component {
  state = {
    articleText: ''
  };

  handleTextUpdate = text => {
    this.setState({ articleText: text });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <Navbar />
          <Header />
          <div className="row pageCon">
            <MultipleArticles
              onTextUpdate={this.handleTextUpdate}
              className="sidebar col-1-of-3"
            />
            <MainDisplay />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
