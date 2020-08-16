import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App.js';
import Home from './views/home/Home';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={App}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
