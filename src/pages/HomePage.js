import React, { Component } from 'react';
import Form from '../components/form/Form';
import Table from '../components/table/Table';
import { connect } from 'react-redux';
import { addPartner } from '../actions/partnersActions';

export class HomePage extends Component {
  handleAdding = (name, value) => {
    const { partners, onAddPartner } = this.props;

    const result = partners.find(item => item.name === name);
    if (result) {
      alert('This partner already exists.');
    } else if (name === '' || value <= 0 || value === undefined) {
      alert("Please enter valid data. Don't forget to add value.");
    } else {
      onAddPartner(name, value);
    }
  };

  render() {
    const { partners } = this.props;
    return (
      <div>
        <Form
          valueName='value'
          valuePlaceholder='Value...'
          handlePushButton={this.handleAdding}
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
  onAddPartner: (name, value) => dispatch(addPartner(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
