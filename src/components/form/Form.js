import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: ''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAdding = () => {
    const { partners, addPartner } = this.props;
    let result = partners.find(item => item.name === this.state.name);
    if (result !== undefined) {
      alert('This partner already exists.');
    } else if (
      this.state.name === '' ||
      this.state.hours <= 0 ||
      this.state.value <= 0 ||
      this.state.value === undefined
    ) {
      alert("Please enter valid data. Don't forget to add value.");
    } else {
      addPartner(this.state.name, this.state.value);
    }
  };

  render() {
    return (
      <form>
        <input
          className='nameField'
          type='text'
          name='name'
          placeholder='Name...'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />
        <input
          className='valueField'
          type='number'
          name='value'
          placeholder='Value...'
          value={this.state.value}
          onChange={e => this.handleValueChange(e)}
        />

        <button
          className='btn btn-danger m-2'
          type='button'
          onClick={this.handleAdding}
        >
          Add
        </button>
      </form>
    );
  }
}
