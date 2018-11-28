import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Market from './components/Market'
import Vehicles from './components/Vehicles'
import './App.css';
import MarketDetails from './components/MarketDetails'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Market} exact />
          <Route path='/market/details/:id' component={MarketDetails} />
          <Route path='/vehicles' component={Vehicles} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
