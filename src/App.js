import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          destination="Lima"
          country="Pérou"
          image="https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-a-lima-perou-par-carolina-75de0d4b78157b9aa06633e339421b0e.jpg"
          distance="10 383 kms"
        />

        <Travel
          destination="Dunkerque"
          country="France"
          image="https://cdn-media.rtl.fr/cache/BNKZBRR1co4ZWNJWEHfCFw/880v587-0/online/image/2017/0530/7788764473_1.jpg"
          distance="280 kms"
        />
      </div>
    );
  }
}

export default App;
