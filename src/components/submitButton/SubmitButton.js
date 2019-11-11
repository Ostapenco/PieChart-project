import React, { Component } from 'react';
import './SubmitButton.css';

export default class SubmitButton extends Component {
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

  handleSubmit = () => {
    const { partners, calculatePoints } = this.props;
    let result = partners.find(item => item.name === this.state.name);
    if (result === undefined || this.state.hours <= 0) {
      alert('Please enter valid data');
    } else {
      calculatePoints(this.state.name, this.state.hours);
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
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
