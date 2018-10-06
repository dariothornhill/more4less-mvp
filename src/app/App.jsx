import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from '../config/fire';

import Deals from './deals/DealsContainer';
import Account from './account/AccountComponent';
import Login from './account/LoginContainer';
import Logout from './account/LogoutContainer';


class App extends Component {
  constructor() {
    super();
    console.log('App: ', this.props);
    this.state = {
      user: null,
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
      this.setState({ loading: false });
    });
  }

  logout() {
    fire
      .auth()
      .signOut()
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={(user) ? Account : Login} />
            <Route exact path="/deals" component={Deals} />
            <Route exact path="/my-account" component={Account} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default connect(null)(App);

