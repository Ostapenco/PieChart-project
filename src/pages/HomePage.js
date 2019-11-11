import React, { Component } from 'react';
import Form from '../components/form/Form';
import Table from '../components/table/Table';

export class HomePage extends Component {
  render() {
    const { partners, addPartner } = this.props;
    return (
      <div>
        <Form addPartner={addPartner} partners={partners} />
        <Table partners={partners} />
      </div>
    );
  }
}

export default HomePage;
