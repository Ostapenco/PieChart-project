import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header title='Business Shares Chart' />
        <Route exact path='/' render={() => <HomePage />} />
        <Route path='/piechart' render={() => <ChartPage />} />
      </Router>
    );
  }
}

export default App;
