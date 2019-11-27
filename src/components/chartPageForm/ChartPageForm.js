import React, { Component } from 'react';
import './ChartPageForm.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    let defaultPartner = props.partners[0];
    this.state = {
      defaultPartner: defaultPartner,
      name: defaultPartner.name,
      hours: '',
      hoursError: ''
    };
  }

  validate = () => {
    const { hours } = this.state;
    let hoursError = '';

    if (hours < 1 || hours === '') {
      hoursError = 'Error: "Add hours. It cannot be less than 1 or empty"';
    } else if (hours > 0) {
      hoursError = '';
    }

    if (hoursError) {
      this.setState({ hoursError });
      return false;
    }
    return true;
  };

  handleSubmitButton = () => {
    const { name, hours } = this.state;
    const { onAddingWorkingHours } = this.props;
    const isValid = this.validate();

    if (isValid) {
      onAddingWorkingHours(name, hours);
      this.setState({ hoursError: '' });
    }
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleHoursChange(e) {
    this.setState({ hours: e.target.value });
  }

  render() {
    const { hours, hoursError } = this.state;
    const { partners } = this.props;
    return (
      <div>
        <form className='chartPageForm'>
          <select
            className='selectField'
            defaultValue={this.state.defaultPartner.name}
            onChange={e => this.handleNameChange(e)}
          >
            {partners.map(partner => (
              <option key={partner.id}>{partner.name}</option>
            ))}
          </select>
          <input
            className='valueField'
            type='number'
            name='hours'
            placeholder='Hours...'
            value={hours}
            onChange={e => this.handleHoursChange(e)}
          />
          <button
            className='submitBtn'
            type='button'
            onClick={() => this.handleSubmitButton()}
          >
            Submit
          </button>
          {hoursError ? <div className='errorMessage'>{hoursError}</div> : null}
        </form>
      </div>
    );
  }
}
