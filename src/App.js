import React from 'react';
import './scss/main.scss';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/project/:projectId' component={Project} />
        </Switch>
    </Router>
  );
}

export default App;
