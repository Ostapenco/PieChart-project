import React, { Component } from 'react';
import './PartnersListEditedTable.css';
import EditedTableBody from './editedtablebody/EditedTableBody';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editId: -1,
      editedName: '',
      nameHasChanged: false,
      editedValue: 0,
      valueHasChanged: false
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

  handleNameEdit = (e, id) => {
    this.setState({
      editedName: e.target.value,
      nameHasChanged: true
    });
    this.props.onEditingName(id, e.target.value);
  };

  handleValueEdit = (e, id) => {
    this.setState({
      editedValue: e.target.value,
      nameHasChanged: true
    });
    this.props.onEditingValue(id, e.target.value);
  };

  render() {
    const { partners, onDelPartner } = this.props;
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
              editing={editing}
              editId={editId}
              startEditingRow={this.startEditingRow}
              stopEditingRow={this.stopEditingRow}
              handleNameEdit={this.handleNameEdit}
              handleValueEdit={this.handleValueEdit}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
