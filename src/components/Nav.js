import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <button>Market</button>
        </Link>
        <Link to='/vehicles'>
          <button>Vehicles</button>
        </Link>
      </div>
    )
  }
}