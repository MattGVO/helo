import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" />
        </Switch>
    );
  }
}

export default App;
