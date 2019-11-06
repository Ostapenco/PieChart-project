import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['1', '2', '3'],
      datasets: [
        {
          data: [200, 400, 600],
          backgroundColor: ['red', 'blue', 'green']
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>
        <h3>Pie Chart</h3>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
        />
      </div>
    );
  }
}
