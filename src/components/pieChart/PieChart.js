import React, { Component } from 'react';
import Chart from '../Chart';
import './PieChart.scss';
import PropTypes from 'prop-types';

class PieChart extends Component {
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
        item.share = 0;
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
    return result;
  }

  render() {
    let sharesArr = this.calculateShares(this.props.partners);
    let data = sharesArr.map(({ share }) => share);
    let labels = sharesArr.map(({ name }) => name);
    const chartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            '#886565',
            '#eeebeb',
            '#a9a3a3',
            '#802f47',
            '#57572a',
            '#2a2a5f',
            '#BDB76B',
            '#2c131a',
            '#275a27',
            '#924a5f',
            '#574d50'
          ]
        }
      ]
    };

    return (
      <div className='Chart'>
        <h2 id='title'>Pie Chart</h2>
        <Chart chartData={chartData} />
      </div>
    );
  }
}

PieChart.propTypes = {
  partners: PropTypes.array.isRequired
};

export default PieChart;
