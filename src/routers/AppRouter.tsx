import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { HomePage } from '../pages/Home';
import { DetailsPage } from '../pages/Details';

type Props = {};

export const AppRouter = (props: Props) => {
  return (
    <Switch>
      <Route path='/:id' component={DetailsPage}>
      </Route>
      <Route path='/' component={HomePage}>
      </Route>
    </Switch>
  );
};

export default AppRouter;