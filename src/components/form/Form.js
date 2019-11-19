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

  render() {
    const {
      valueName,
      valuePlaceholder,
      handlePushButton,
      buttonName
    } = this.props;
    const { name, value } = this.state;
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
            name={valueName}
            placeholder={valuePlaceholder}
            value={value}
            onChange={e => this.handleValueChange(e)}
          />
          <button
            className='btn btn-dark m-2'
            type='button'
            onClick={() => handlePushButton(name, value)}
          >
            {buttonName}
          </button>
        </form>
      </div>
    );
  }
}
