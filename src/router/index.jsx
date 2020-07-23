import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { default as RouteWithLayout } from '../components/RouteWithLayout';
import BaseLayout from '../layouts/base';
import HomePage from '../pages/home';
import PartyPage from '../pages/partyPage';

const router = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <RouteWithLayout exact path='/' component={HomePage} layout={BaseLayout} />
        <RouteWithLayout exact path='/party' component={PartyPage} layout={BaseLayout} />
      </Switch>
    </Router>
  );
};

export default router;
