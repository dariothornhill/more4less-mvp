import React from "react";
import { connect } from "react-redux";
import {bindActionCreators } from 'redux';
import { userLogin } from "../actions";
import { Label, Button, Input, Form, FormGroup, Col } from "reactstrap";
import Message from "../components/Message";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  login(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const {userLogin} = this.props.actions;
    userLogin(this.state.email, this.state.password)
      .then(user => {
        this.setState({ loading: false });
        console.log(user);
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
        console.log(error.message);
      });
  }

  renderError() {
    const { error } = this.state;
    if (error !== "") {
      return (
        <FormGroup>
          <Message msg={error} color="red" />
        </FormGroup>
      );
    }
  }
  render() {
    const { email, password, loading } = this.state;
    return (
        <Form className="login-form" onSubmit={this.login}>
          <h2 className="form-header">More4Less</h2>
          {this.renderError()}
          <FormGroup row>
            <Label sm={2} for="email">
              Email:{" "}
            </Label>
            <Col sm={10}>
              <Input
                className="login-label"
                type="email"
                name="email"
                placeholder="Enter an email address"
                value={email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="password">
              Password:{" "}
            </Label>
            <Col sm={10}>
              <Input
                className="login-label"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <div className="text-center">
            <Button className="login-button" type="submit">
              Submit
            </Button>
          </div>
        </Form>
    );
  }
}

function  mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userLogin
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);