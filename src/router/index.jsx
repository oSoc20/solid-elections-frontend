import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { default as RouteWithLayout } from '../components/RouteWithLayout';
import BaseLayout from '../layouts/base';
import HomePage from '../pages/home';
import PartyPage from '../pages/partyPage';
import CityPage from '../pages/cityPage';
import CandidatePage from '../pages/candidatePage';

const router = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <RouteWithLayout exact path='/' component={HomePage} layout={BaseLayout} />
        <RouteWithLayout exact path='/stad/:cityName' component={CityPage} layout={BaseLayout} />
        <RouteWithLayout exact path='/stad/:cityName/:partyName' component={PartyPage} layout={BaseLayout} />
        <RouteWithLayout exact path='/stad/:cityName/:partyName/:candidateName' component={CandidatePage} layout={BaseLayout} />
      </Switch>
    </Router>
  );
};

export default router;
