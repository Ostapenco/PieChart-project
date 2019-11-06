import React, { Component } from 'react';
import PieChartItem from './PieChartItem';
import PropTypes from 'prop-types';

class PieChart extends Component {
  calculateShares(partners) {
    const result = [];
    let sum = 0;

    for (let partner of partners) {
      sum += partner.points;
    }

    if (sum === 0) return partners;

    for (let partner of partners) {
      const item = {};
      item.name = partner.name;
      item.share = ((partner.points / sum) * 100).toFixed(2);
      item.points = partner.points;
      result.push(item);
    }
    return result;
  }

  render() {
    let shares = this.calculateShares(this.props.partners);

    return (
      <div>
        {shares.map(share => (
          <PieChartItem
            key={share.name}
            name={share.name}
            share={share.share}
          />
        ))}
      </div>
    );
  }
}

PieChart.propTypes = {
  partners: PropTypes.array.isRequired
};

export default PieChart;
