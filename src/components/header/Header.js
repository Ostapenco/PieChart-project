import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title}</h1>
        <Link className='linkStyle' to='/'>
          Home
        </Link>{' '}
        |{' '}
        <Link className='linkStyle' to='/piechart'>
          Chart
        </Link>
      </header>
    );
  }
}
