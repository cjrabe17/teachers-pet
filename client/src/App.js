import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";

// Testing authentication
import Auth from "./components/auth";
import history from "./components/history";
import Home from "./components/Home";
import Callback from "./components/Callback";


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
    </div>
  </Router>
);

export default App;



// The correct App component:
// const App = props => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/signin" component={SignIn} />
//         <Route exact path="/signup" component={SignUp} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;