  
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'


 const Router = () => {
     return (
        <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/car/:id" component={Car} />
    </Switch>
);
};

  
  export default Router;
  