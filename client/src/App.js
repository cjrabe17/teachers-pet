import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
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
        <Route exact path="/about" render={(props) => <About auth={auth} {...props} />} />
        <Route exact path="/pricing" render={(props) => <Pricing auth={auth} {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact auth={auth} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;