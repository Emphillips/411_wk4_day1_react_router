import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route, Router } from 'react-router';

/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
 const RouterApp = () => {
     return (
         <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/about" component={About} />
         </Switch>
     )
 }

  
  export default RouterApp;
  