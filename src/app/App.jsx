import React, { Component } from 'react';
import fire from "../config/fire";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Deals from './deals/DealsContainer';
import Account from './account/AccountContainer';
//import Login from './account/LoginContainer';


class App extends Component {
 constructor(props) {
   super(props);
   console.log("App: ", this.props);
   this.state = {
    user: null,
    loading: true,
    error: ""
  };
 }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
      this.setState({ loading: false });
    });
  };

  logout() {
    fire
      .auth()
      .signOut()
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { user, loading, error } = this.state;
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={(user) ? Deals : Account} />
            <Route exact path="/deals" component={Deals} />
            <Route exact path="/account" component={Account} />
        </Switch>
    </Router>
    );
  }
}

export default connect(null)(App);