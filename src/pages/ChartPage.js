import React, { Component } from 'react';
import PieChart from '../components/pieChart/PieChart';
import SubmitButton from '../components/submitButton/SubmitButton';

export class ChartPage extends Component {
  render() {
    const { partners, calculatePoints } = this.props;
    return (
      <div>
        <SubmitButton calculatePoints={calculatePoints} partners={partners} />
        <PieChart partners={partners} />
      </div>
    );
  }
}

export default ChartPage;
