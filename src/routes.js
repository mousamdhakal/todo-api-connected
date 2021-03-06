import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import DashBoard from './views/DashBoard/DashBoard';
import Home from './views/home/Home';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import withUnAuthenticated from './hoc/withUnAuthenticated';
import withAuthenticated from './hoc/withAuthenticated';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/dashboard" component={withAuthenticated(DashBoard)}></Route>
      <Route path="/signup" component={withUnAuthenticated(SignUp)}></Route>
      <Route path="/signin" component={withUnAuthenticated(SignIn)}></Route>
      <Route path="/" component={withUnAuthenticated(Home)}></Route>
    </Switch>
  </HashRouter>
);

export default Routes;
