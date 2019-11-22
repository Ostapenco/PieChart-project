import React, { Component } from 'react';
import Form from '../components/form/Form';
import PartnersListEditedTable from '../components/partnerslisteditedtable/PartnersListEditedTable';
import { connect } from 'react-redux';
import {
  addingNewPartner,
  delPartner,
  editingName,
  editingValue
} from '../actions/partnersActions';

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
    const {
      partners,
      onDelPartner,
      onEditingName,
      onEditingValue
    } = this.props;
    return (
      <div>
        <Form
          valueName='value'
          valuePlaceholder='Value...'
          handlePushButton={this.handleAddingNewPartner}
          buttonName='Add'
        />
        <PartnersListEditedTable
          partners={partners}
          onDelPartner={onDelPartner}
          onEditingName={onEditingName}
          onEditingValue={onEditingValue}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.partnerList.partners
});

const mapDispatchToProps = dispatch => ({
  onAddingNewPartner: (name, value) => dispatch(addingNewPartner(name, value)),
  onDelPartner: id => dispatch(delPartner(id)),
  onEditingName: (id, newName) => dispatch(editingName(id, newName)),
  onEditingValue: (id, newValue) => dispatch(editingValue(id, newValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
