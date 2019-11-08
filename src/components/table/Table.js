import React, { Component } from 'react';
import './Table.css';

export class Table extends Component {
  renderTableData() {
    return this.state.partners.map((partner, index) => {
      const { id, name, value, points } = partner;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{value}</td>
          <td>{points}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.props.partners[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h2 id='title'>List of Partners</h2>
        <table id='partners'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.props.partners.map(({ id, name, value, points }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{value}</td>
                <td>{points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
