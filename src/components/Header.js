import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Business Shares Chart</h1>
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
