import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';
import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to FIFA World Cup 2018</h1>
          </header>
          <h1 className="App-intro">
            <Ranking />
          </h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
