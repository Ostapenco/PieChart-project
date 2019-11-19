import React, { Component } from 'react';
import Form from '../components/form/Form';
import Table from '../components/table/Table';
import { connect } from 'react-redux';
import { addingNewPartner } from '../actions/partnersActions';

export class HomePage extends Component {
  handleAddingNewPartner = (name, value) => {
    const { partners, onAddingNewPartner } = this.props;

    const result = partners.find(item => item.name === name);
    if (result) {
      alert('This partner already exists.');
    } else if (name === '' || value <= 0 || value === undefined) {
      alert("Please enter valid data. Don't forget to add value.");
    } else {
      onAddingNewPartner(name, value);
    }
  };

  render() {
    const { partners } = this.props;
    return (
      <div>
        <Form
          valueName='value'
          valuePlaceholder='Value...'
          handlePushButton={this.handleAddingNewPartner}
          buttonName='Add'
        />
        <Table partners={partners} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.partnerList.partners
});

const mapDispatchToProps = dispatch => ({
  onAddingNewPartner: (name, value) => dispatch(addingNewPartner(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
