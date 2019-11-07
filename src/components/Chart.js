import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Chart.css';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    return (
      <div className='Chart'>
        <Pie
          width={600}
          data={this.props.chartData}
          options={{
            animation: {
              animateScale: true
            },
            maintainAspectRatio: true,
            responsive: true
          }}
        />
      </div>
    );
  }
}
