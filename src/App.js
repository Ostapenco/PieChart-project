import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import PieChart from './components/PieChart';
import Form from './components/Form';
import Submit from './components/Submit';
import Table from './components/Table';

import './App.css';

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

    this.pieChartElement = React.createRef();
  }

  Partner(id, name, v) {
    return {
      id: id,
      name: name,
      value: v,
      points: 0
    };
  }

  callChildFunc() {
    return this.pieChartElement.current.calculateShares(this.state.partners);
  }

  calculatePoints(name, hours) {
    const list = this.state.partners;
    const newArray = list.filter(partner => partner.name === name);
    newArray[0].points += newArray[0].value * hours;
    const index = list
      .map(function(e) {
        return e.name;
      })
      .indexOf(name);
    list.splice(index, 1, newArray[0]);
    this.setState({ partners: list });
    return this.callChildFunc();
  }

  addPartner(name, value) {
    const newObj = {};
    newObj.id = this.state.partners.length + 1;
    newObj.name = name;
    newObj.value = value;
    newObj.points = 0;
    this.state.partners.push(newObj);
    this.setState({ partners: this.state.partners });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <Form
                  addPartner={(name, value) => this.addPartner(name, value)}
                  partners={this.state.partners}
                />
                <Table partners={this.state.partners} />
              </React.Fragment>
            )}
          />
          <Route
            path='/piechart'
            render={props => (
              <React.Fragment>
                <Submit
                  calculatePoints={(name, hours) =>
                    this.calculatePoints(name, hours)
                  }
                  partners={this.state.partners}
                />
                <PieChart
                  partners={this.state.partners}
                  ref={this.pieChartElement}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
