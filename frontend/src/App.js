import React from  'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useCallback } from 'react';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext  } from './shared/context/auth-context';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true);
  },[])
  
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  },[])

  let routes;

  if(isLoggedIn) {
    routes = (<Switch>
      <Route path = "/" exact><Users /></Route>
      <Route path = '/:userId/places'><UserPlaces /></Route>
      <Route path = "/places/new"><NewPlace /></Route>
      <Route path = '/places/:placeId'><UpdatePlace /></Route>
      <Redirect to ='/ ' />
    </Switch>);
  }
  else {
    routes = (<Switch>
      <Route path = "/" exact><Users /></Route>
      <Route path = '/:userId/places'><UserPlaces /></Route>
      <Route path = '/auth'><Auth /></Route>
      <Redirect to ='/auth' />
    </Switch>)
  }

  return (
    <AuthContext.Provider value = {{isLoggedIn: isLoggedIn ,login:login ,logout:logout }}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
