import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav'
import { Link } from 'react-router-dom';

/*
step 1:
create vehicles details route
    1a.
     VehicleDetails component
    1b. 
     path = '/vehicles/details/:id'

step 2:
componentDidMount of VehicleDetails component
      2a.
      axios GET url + id (this.props.match.params.id)
      2b.
      setState with response
      2c.
      display detail about car
*/

export default class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }
  componentDidMount() {
    let promise = axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    promise.then(res => {
      this.setState({ cars: res.data })
    })
  }
  render() {
    let carList = this.state.cars.map(car => {
      return <div>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <Link to={`/vehicles/details/${car.id}`}>
          <button>Details for {car.make} {car.model}</button>
        </Link>
        <hr />
      </div>
    })
    return (
      <div>
        <Nav />
        <h1>Tucker's Used Cars</h1>
        {carList}
      </div>
    )
  }
}