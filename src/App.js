import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'

function App() {
  return (
    <Router>
        <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
