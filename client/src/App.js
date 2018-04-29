import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Callback from './components/Callback';
import Auth from './components/auth';
import history from './components/history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history} component={Home}>
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;