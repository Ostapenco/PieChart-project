import React, { Component } from 'react';
import './PartnersListEditedTable.css';
import EditedTableBody from './editedtablebody/EditedTableBody';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editId: -1
    };
  }

  startEditingRow = id => {
    this.setState({
      editId: id,
      editing: true
    });
  };

  stopEditingRow = () => {
    this.setState({
      editing: false
    });
  };

  render() {
    const {
      partners,
      onDelPartner,
      onEditingName,
      onEditingValue
    } = this.props;
    const { editing, editId } = this.state;

    return (
      <div>
        <h2 id='title'>List of Partners</h2>
        <table id='partners'>
          <tbody>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>VALUE</th>
              <th>POINTS</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <EditedTableBody
              partners={partners}
              onDelPartner={onDelPartner}
              onEditingName={onEditingName}
              onEditingValue={onEditingValue}
              editing={editing}
              editId={editId}
              startEditingRow={this.startEditingRow}
              stopEditingRow={this.stopEditingRow}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
