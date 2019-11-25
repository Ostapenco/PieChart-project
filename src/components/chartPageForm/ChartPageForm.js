import React, { Component } from 'react';
import './ChartPageForm.css';
//import ErrorBoundary from '../ErrorBoundary';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '',
      nameError: '',
      valueError: ''
    };
  }

  validate = () => {
    const { name, value } = this.state;
    let nameError = '';
    let valueError = '';

    if (name.length < 3 || name === '') {
      nameError = 'Error: "Name cannot be less than 3 characters or empty"';
    }

    if (value < 1 || value === '') {
      valueError = 'Error: "Add hours. It cannot be less than 1 or empty"';
    } else if (value > 0) {
      valueError = '';
    }

    if (nameError || valueError) {
      this.setState({ nameError, valueError });
      return false;
    }
    return true;
  };

  handleSubmitButton = () => {
    const { name, value } = this.state;
    const { partners, onAddingWorkingHours } = this.props;

    const isValid = this.validate();
    const result = partners.find(item => item.name === name);

    if (name.length > 2 && !result) {
      this.setState({ nameError: 'Error: "This partner does not exist"' });
    } else if (isValid && result) {
      onAddingWorkingHours(name, value);
      this.setState({ nameError: '', valueError: '' });
    }
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { name, value, nameError, valueError } = this.state;
    return (
      <div>
        <form>
          <input
            className='nameField'
            type='text'
            name='name'
            placeholder='Name...'
            value={name}
            onChange={e => this.handleNameChange(e)}
          />
          <input
            className='valueField'
            type='number'
            name='hours'
            placeholder='Hours...'
            value={value}
            onChange={e => this.handleValueChange(e)}
          />
          <button
            className='btn btn-dark m-2'
            type='button'
            onClick={() => this.handleSubmitButton()}
          >
            Submit
          </button>
          {nameError ? <div className='errorMessage'>{nameError}</div> : null}
          {valueError ? <div className='errorMessage'>{valueError}</div> : null}
        </form>
      </div>
    );
  }
}
