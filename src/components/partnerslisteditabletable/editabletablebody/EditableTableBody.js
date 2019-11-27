import React, { Component } from 'react';
import './EditableTableBody.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditIcon from 'material-ui/svg-icons/image/edit';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

export class EditableTableBody extends Component {
  showEditOrCheckIcon = id => {
    const { editing, editId, stopEditingRow, startEditingRow } = this.props;
    if (editing && editId === id) {
      return <CheckIcon onClick={() => stopEditingRow()} />;
    } else {
      return (
        <EditIcon className='svg_icons' onClick={() => startEditingRow(id)} />
      );
    }
  };

  showOrChangeName = (id, name) => {
    const { editing, editId, onEditingName } = this.props;
    if (editing && editId === id) {
      return (
        <input
          className='nameInput'
          type='text'
          placeholder={name}
          value={name}
          onChange={e => onEditingName(id, e.target.value)}
        />
      );
    } else {
      return name;
    }
  };

  showOrChangeValue = (id, value) => {
    const { editing, editId, onEditingValue } = this.props;
    if (editing && editId === id) {
      return (
        <div className='rowChange'>
          <input
            className='valueInput'
            type='number'
            placeholder={value}
            value={value}
            onChange={e => onEditingValue(id, e.target.value)}
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

export default EditableTableBody;
