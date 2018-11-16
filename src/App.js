import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
    return (
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    );
}

export default App;
