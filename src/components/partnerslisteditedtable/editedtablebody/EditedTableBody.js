import React, { Component } from 'react';
import './EditedTableBody.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditIcon from 'material-ui/svg-icons/image/edit';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

export class EditedTableBody extends Component {
  showEditOrCheckIcon = id => {
    const { editing, editId, stopEditingRow, startEditingRow } = this.props;
    if (editing && editId === id) {
      return (
        <CheckIcon className='checkIcon' onClick={() => stopEditingRow()} />
      );
    } else {
      return (
        <EditIcon className='svg_icons' onClick={() => startEditingRow(id)} />
      );
    }
  };

  showOrChangeName = (id, name) => {
    const { editing, editId, handleNameEdit } = this.props;
    if (editing && editId === id) {
      return (
        <input
          className='nameInput'
          type='text'
          placeholder={name}
          value={name}
          onChange={e => handleNameEdit(e, editId)}
        />
      );
    } else {
      return name;
    }
  };

  showOrChangeValue = (id, value) => {
    const { editing, editId, handleValueEdit } = this.props;
    if (editing && editId === id) {
      return (
        <div className='rowChange'>
          <input
            className='valueInput'
            type='number'
            placeholder={value}
            value={value}
            onChange={e => handleValueEdit(e, editId)}
          />
        </div>
      );
    } else {
      return value;
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        {this.props.partners.map(({ id, name, value, points }) => (
          <tr key={id}>
            <td>{id}</td>
            <td className='nameTd'>{this.showOrChangeName(id, name)}</td>
            <td className='valueTd'>{this.showOrChangeValue(id, value)}</td>
            <td>{points}</td>
            <td className='iconTd'>{this.showEditOrCheckIcon(id)}</td>
            <td className='iconTd'>
              <TrashIcon
                className='svg_icons'
                onClick={() => this.props.onDelPartner(id)}
              />
            </td>
          </tr>
        ))}
      </MuiThemeProvider>
    );
  }
}

export default EditedTableBody;
