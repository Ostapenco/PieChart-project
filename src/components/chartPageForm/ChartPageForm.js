import React, { Component } from 'react';
import './ChartPageForm.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '',
      valueError: ''
    };
  }

  validate = () => {
    const { value } = this.state;
    let valueError = '';

    if (value < 1 || value === '') {
      valueError = 'Error: "Add hours. It cannot be less than 1 or empty"';
    } else if (value > 0) {
      valueError = '';
    }

    if (valueError) {
      this.setState({ valueError });
      return false;
    }
    return true;
  };

  handleSubmitButton = () => {
    const { name, value } = this.state;
    const { onAddingWorkingHours } = this.props;

    const isValid = this.validate();

    if (isValid) {
      onAddingWorkingHours(name, value);
      this.setState({ valueError: '' });
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
          <label>
            <select
              className='selectField'
              value={name}
              onChange={e => this.handleNameChange(e)}
            >
              {this.props.partners.map(partner => (
                <option key={partner.id} value={partner.name}>
                  {partner.name}
                </option>
              ))}
            </select>
          </label>
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
