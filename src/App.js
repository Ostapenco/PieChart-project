import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: [
        this.Partner(1, 'John', 30),
        this.Partner(2, 'Peter', 5),
        this.Partner(3, 'Steve', 15)
      ]
    };
  }

  Partner(id, name, v) {
    return {
      id: id,
      name: name,
      value: v,
      points: 0
    };
  }

  calculatePoints = (name, hours) => {
    const { partners } = this.state;
    const currentPartner = partners.find(partner => partner.name === name);
    const restPartners = partners.filter(partner => partner.name !== name);
    currentPartner.points += currentPartner.value * hours;
    this.setState({ partners: [...restPartners, currentPartner] });
  };

  addPartner = (name, value) => {
    const { partners } = this.state;
    this.setState({
      partners: [
        ...partners,
        {
          id: partners.length + 1,
          name,
          value: +value,
          points: 0
        }
      ]
    });
  };

  render() {
    const { partners } = this.state;
    return (
      <Router>
        <div>
          <Header title='Business Shares Chart' />
          <Route
            exact
            path='/'
            render={props => (
              <HomePage addPartner={this.addPartner} partners={partners} />
            )}
          />
          <Route
            path='/piechart'
            render={props => (
              <ChartPage
                calculatePoints={this.calculatePoints}
                partners={partners}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
