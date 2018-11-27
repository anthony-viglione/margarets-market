import React, { Component } from 'react';
import Nav from './Nav';
import { foodItems } from './../mockData'


export default class Market extends Component {
  render() {
    let foodList = foodItems.map(item => {
      return (
        <div key={item.id}>
          <img src={item.url} alt="" />
          <button>See More</button>
          <hr />
        </div>
      )
    })
    return (
      <div>
        <Nav />
        <h1>Margaret's Market</h1>
        {foodList}
      </div>
    )
  }
}
