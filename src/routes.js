import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/AboutPage";
import Search from "./components/SearchPage";
import Results from "./components/ResultsPage";
import Contact from "./components/ContactPage";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/results" component={Results} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}
