import React, { Component } from 'react';
//import { Pie } from 'react-chartjs-2';
//import Form from './Form';
//import PieChartItem from './PieChartItem';
import Chart from './Chart';
import PropTypes from 'prop-types';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        //labels: this.getLabels(),
        labels: this.getLabels(),
        datasets: [
          {
            //data: this.getData(),
            data: this.getData(),
            backgroundColor: ['#886565', '#eeebeb', '#a9a3a3']
          }
        ]
      }
    });
  }

  calculateShares(partners) {
    const result = [];
    let sum = 0;

    for (let partner of partners) {
      sum += partner.points;
    }

    if (sum === 0) {
      for (let partner of partners) {
        const item = {};
        item.name = partner.name;
        item.share = 100 / 3;
        item.points = partner.points;
        result.push(item);
      }
    } else {
      for (let partner of partners) {
        const item = {};
        item.name = partner.name;
        item.share = ((partner.points / sum) * 100).toFixed(2);
        item.points = partner.points;
        result.push(item);
      }
    }
    console.log(result);
    console.log(sum);
    return result;
  }

  getLabels() {
    let result = this.calculateShares(this.props.partners);
    let labels = result.map(({ name }) => name);
    console.log(labels);
    return labels;
  }

  getData() {
    let result = this.calculateShares(this.props.partners);
    let data = result.map(({ share }) => share);
    console.log(data);
    return data;
  }

  render() {
    return (
      <div className='Chart'>
        <h3>Pie Chart</h3>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

PieChart.propTypes = {
  partners: PropTypes.array.isRequired
};

export default PieChart;
