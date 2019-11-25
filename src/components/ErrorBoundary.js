import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  ShowError = () => {
    if (this.props.name.length < 4) {
      throw new Error('too short');
    }
    this.setState({
      hasError: true
    });
  };

  render() {
    if (this.state.hasError) {
      return <h3>Error</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
