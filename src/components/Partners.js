import React, { Component } from 'react';

export class Partners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: [Partner('John'), Partner('Peter'), Partner('Steve')]
    };
  }

  Partner(name) {
    return {
      name: name,
      value: 0,
      points: 0
    };
  }

  render() {
    return (
      <div>
        <div>this.state.partners[0] </div>
        <div>this.state.partners[1] </div>
        <div>this.state.partners[2] </div>
      </div>
    );
  }
}

export default Partners;
