import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class Chart extends Component {
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
