import React, { Component } from 'react';
import fire from "../config/fire";
import { connect } from "react-redux";
import Login from "./Login";
import Products from "./Products";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


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
      <React.Fragment>
      <Navigation/>

    
      <div className="container-fluid" loading={loading} error={error}>
        {user ? <Products logout={this.logout}/> : <Login />}
      <Footer></Footer>
        
      </div>
      </React.Fragment>
    );
  }
}

export default connect(null)(App);