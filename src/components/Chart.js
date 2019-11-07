import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

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
        <Pie data={this.props.chartData} options={{}} />
      </div>
    );
  }
}

/*
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['1', '2', '3'],
      datasets: [
        {
          data: [200, 400, 600],
          backgroundColor: ['#886565', '#eeebeb', '#a9a3a3']
        }
      ]
    };
  }

  render() {
    return (
      <div className='Chart'>
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

  type: 'pie',
  data: {
    labels: ['1', '2', '3'],
      datasets: [
        {
          data: [200, 400, 600],
          backgroundColor: ['#886565', '#eeebeb', '#a9a3a3']
         }
        ]
      }

      options: {
        animation: {
          animateScale: true
        }
      }
});

render() {
  return (
    <div>
      <h3>Pie Chart</h3>
      <Pie
        data={{
          labels: this.labels,
          datasets: this.datasets
        }}
      />
    </div>
  );
}
}


Chart = document.getElementById('Chart').getContext('2d');

pieChart = new Chart(Chart, {

*/
