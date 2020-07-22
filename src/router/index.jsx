import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { default as RouteWithLayout } from '../components/RouteWithLayout';
import BaseLayout from '../layouts/base';
import HomePage from '../pages/home';
import PartyPage from '../pages/partyPage';

const router = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <RouteWithLayout path="/" component={HomePage} exact layout={BaseLayout} />
        <RouteWithLayout path="/party" component={PartyPage} exact layout={BaseLayout} />

        {/* <RouteWithLayout
          exact
          layout={BaseLayout}
          path="/today/:workoutsessionId"
          component={TodayExercisesPage}
        />
        <RouteWithLayout exact layout={BaseLayout} path="/workouts" component={WorkoutsPage} />
        <RouteWithLayout exact layout={BaseLayout} path="/progress" component={ProgressPage} />
        <RouteWithLayout exact layout={BaseLayout} path="/profile" component={ProfilePage} />
        <RouteWithLayout
          exact
          layout={BaseLayout}
          path="/profile/edit"
          component={EditProfilePage}
        /> */}
      </Switch>
    </Router>
  );
};

export default router;
