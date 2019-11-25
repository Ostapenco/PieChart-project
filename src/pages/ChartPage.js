import React, { Component } from 'react';
import PieChart from '../components/pieChart/PieChart';
import ChartPageForm from '../components/chartPageForm/ChartPageForm';
import { connect } from 'react-redux';
import { addingWorkingHours } from '../actions/partnersActions';

export class ChartPage extends Component {
  render() {
    const { partners, onAddingWorkingHours } = this.props;
    return (
      <div>
        <ChartPageForm
          onAddingWorkingHours={onAddingWorkingHours}
          partners={partners}
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
