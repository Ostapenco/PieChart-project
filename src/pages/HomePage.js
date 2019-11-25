import React, { Component } from 'react';
import HomePageForm from '../components/homePageForm/HomePageForm';
import PartnersListEditableTable from '../components/partnerslisteditabletable/PartnersListEditableTable';
import { connect } from 'react-redux';
import { addingNewPartner } from '../actions/partnersActions';

export class HomePage extends Component {
  render() {
    const { partners, onAddingNewPartner } = this.props;
    return (
      <div>
        <HomePageForm
          onAddingNewPartner={onAddingNewPartner}
          partners={partners}
        />
        <PartnersListEditableTable />
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
