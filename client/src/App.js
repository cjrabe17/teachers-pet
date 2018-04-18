import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Behavior from "./pages/Behavior";
import NoMatch from "./pages/NoMatch";

const App = props => (
// stateful stuff here?

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={EnsureLoggedInContainer}>
          <Route exact path="/gradebook" component={Grades} />
          <Route exact path="/attendance" component={Attendance} />
          <Route exact path="/behavior" component={Behavior} />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;