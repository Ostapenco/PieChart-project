import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';

class App extends Component {
  render() {
    const { partners } = this.props;
    return (
      <Router>
        <div>
          <Header title='Business Shares Chart' />
          <Route
            exact
            path='/'
            render={props => (
              <HomePage /*addPartner={this.addPartner}*/ partners={partners} />
            )}
          />
          <Route
            path='/piechart'
            render={props => (
              <ChartPage
                // calculatePoints={this.calculatePoints}
                partners={partners}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.partnerList.partners
});

export default connect(mapStateToProps, null)(App);
