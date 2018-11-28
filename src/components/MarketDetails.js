import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { foodItems } from './../mockData';

export default class MarketDetails extends Component {

  render() {
    let singleItem = foodItems.filter(item => {
      return item.id === parseInt(this.props.match.params.id)
    })
    console.log(this.props.match.params.id)
    return (
      <div>
        <Link to='/'>BACK</Link>
        <h1>Market Details</h1>
        <p>You clicked on an item with an id of: {this.props.match.params.id}</p>
        <hr />
        <p>Item: {singleItem[0].name}</p>
        <p>Price: {singleItem[0].price}</p>
        <img src={singleItem[0].url} alt="" />
      </div>
    )
  }
}