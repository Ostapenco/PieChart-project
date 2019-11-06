import React, { Component } from 'react';
import './PieChartItem.css';

export class PieChartItem extends Component {
  render() {
    return (
      <div className='item'>
        <h3>{this.props.name}</h3>
        <h4>{this.props.share}%</h4>
      </div>
    );
  }
}

// PieChartItem.propTypes = {
//   share: PropTypes.number.isRequired
// };

export default PieChartItem;
