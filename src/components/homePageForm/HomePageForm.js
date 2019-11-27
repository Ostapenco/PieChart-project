import React, { Component } from 'react';
import './HomePageForm.scss';

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

    if (value < 0 || value === '') {
      valueError = 'Error: "Value cannot be less than 0 or empty"';
    }

    if (nameError || valueError) {
      this.setState({ nameError, valueError });
      return false;
    }
    return true;
  };

  handleAddButton = () => {
    const { name, value } = this.state;
    const { partners, onAddingNewPartner } = this.props;

    const isValid = this.validate();
    const result = partners.find(item => item.name === name);

    if (result) {
      this.setState({ nameError: 'Error: "This partner already exists"' });
    } else if (isValid && !result) {
      onAddingNewPartner(name, value);
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
        <form className='homePageForm'>
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
            name='value'
            placeholder='Value...'
            value={value}
            onChange={e => this.handleValueChange(e)}
          />
          <button
            className='addBtn'
            type='button'
            onClick={() => this.handleAddButton()}
          >
            Add
          </button>
          {nameError ? <div className='errorMessage'>{nameError}</div> : null}
          {valueError ? <div className='errorMessage'>{valueError}</div> : null}
        </form>
      </div>
    );
  }
}
