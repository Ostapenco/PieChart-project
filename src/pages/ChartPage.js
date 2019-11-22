import React, { Component } from 'react';
import PieChart from '../components/pieChart/PieChart';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
import { addingWorkingHours } from '../actions/partnersActions';

export class ChartPage extends Component {
  handleAddingWorkingHours = (name, value) => {
    const { partners, onAddingWorkingHours } = this.props;
    const result = partners.find(item => item.name === name);
    if (result === undefined || value <= 0) {
      alert('Please enter valid data');
    } else {
      onAddingWorkingHours(name, value);
    }
  };

  render() {
    const { partners } = this.props;
    return (
      <div>
        <Form
          valueName='hours'
          valuePlaceholder='Hours...'
          handlePushButton={this.handleAddingWorkingHours}
          buttonName='Submit'
        />
        <PieChart partners={partners} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.partnerList.partners
});

const mapDispatchToProps = dispatch => ({
  onAddingWorkingHours: (name, value) =>
    dispatch(addingWorkingHours(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
