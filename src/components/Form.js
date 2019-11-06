import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hours: 0,
      value: ''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleHoursChange(e) {
    this.setState({ hours: e.target.value });
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    let result = this.props.partners.find(
      item => item.name === this.state.name
    );
    if (result === undefined || this.state.hours <= 0) {
      alert('Please enter valid data');
    } else {
      this.props.calculatePoints(this.state.name, this.state.hours);
    }
  }

  handleAdding() {
    let result = this.props.partners.find(
      item => item.name === this.state.name
    );
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
      this.props.addPartner(
        this.state.name,
        this.state.hours,
        this.state.value
      );
    }
  }

  render() {
    return (
      <form>
        <input
          className='nameField'
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />
        <input
          className='hoursField'
          type='number'
          name='hours'
          placeholder='Hours'
          value={this.state.hours}
          onChange={e => this.handleHoursChange(e)}
        />
        <button
          className='btn btn-dark m-2'
          type='button'
          onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </button>
        <button
          className='btn btn-danger m-2'
          type='button'
          onClick={this.handleAdding.bind(this)}
        >
          Add
        </button>
        <input
          className='valueField'
          type='number'
          name='value'
          placeholder='Value'
          value={this.state.value}
          onChange={e => this.handleValueChange(e)}
        />
      </form>
    );
  }
}
