import React, { Component } from 'react';
import Header from './components/Header';
import PieChart from './components/PieChart';
import Form from './components/Form';
import Chart from './components/Chart';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: [
        this.Partner('John', 30),
        this.Partner('Peter', 5),
        this.Partner('Steve', 15)
      ]
    };
  }

  Partner(name, v) {
    return {
      name: name,
      value: v,
      points: 0
    };
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
  }

  addPartner(name, hours, value) {
    const newObj = {};
    newObj.name = name;
    newObj.value = value;
    newObj.points = value * hours;
    this.state.partners.push(newObj);
    this.setState({ partners: this.state.partners });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Form
          calculatePoints={(name, hours) => this.calculatePoints(name, hours)}
          addPartner={(name, hours, value) =>
            this.addPartner(name, hours, value)
          }
          partners={this.state.partners}
        />
        <PieChart partners={this.state.partners} />
        <Chart />
      </div>
    );
  }
}

export default App;
