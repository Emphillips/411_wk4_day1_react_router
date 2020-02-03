import React from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route pathe="/components/About" component={About} />
      </Switch>
    </div>  
    </Router>
  );
}

export default App;
