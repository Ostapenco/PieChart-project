import React, { Component } from 'react';
import PieChart from '../components/pieChart/PieChart';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
import { submitHours } from '../actions/partnersActions';

export class ChartPage extends Component {
  handleSubmit = (name, value) => {
    const { partners, onSubmitHours } = this.props;

    let result = partners.find(item => item.name === name);
    if (result === undefined || value <= 0) {
      alert('Please enter valid data');
    } else {
      onSubmitHours(name, value);
    }
  };

  render() {
    const { partners } = this.props;
    return (
      <div>
        <Form
          valueName='hours'
          valuePlaceholder='Hours...'
          handlePushButton={this.handleSubmit}
          buttonName='Submit'
        />
        <PieChart partners={partners} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmitHours: (name, value) => dispatch(submitHours(name, value))
});

export default connect(null, mapDispatchToProps)(ChartPage);
