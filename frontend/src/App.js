import React from  'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path = "/" exact><Users /></Route>
          <Route path = '/:userId/places'><UserPlaces /></Route>
          <Route path = "/places/new"><NewPlace /></Route>
          <Redirect to="/" /> 
        </Switch>
      </main>
    </Router>
  );
}

export default App;
