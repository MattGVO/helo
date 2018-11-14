import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
