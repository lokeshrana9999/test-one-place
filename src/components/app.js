import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import loadable from '@loadable/component';

// import history from "../common/history";
import Profile from "../components/profile";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
};

export default App;
