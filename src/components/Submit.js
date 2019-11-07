import React, { Component } from 'react';
import './Submit.css';

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hours: ''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleHoursChange(e) {
    this.setState({ hours: e.target.value });
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
          className='hoursField'
          type='number'
          name='hours'
          placeholder='Hours...'
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
      </form>
    );
  }
}
