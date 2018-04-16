import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import View from './view';

const initialState = {
  hasError: false,
  email: '',
  password: '',
};

class Login extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
    doLogin: PropTypes.func.isRequired,
  };
  state = initialState;
  handleFieldChange = key => (e) => {
    this.setState({
      [key]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === 'info@keepcoding.io' && this.state.password === '123456') {
      this.setState(initialState);
      this.props.doLogin();
    } else {
      this.setState({
        hasError: true,
      });
    }
  };
  render() {
    return this.props.isLogged ? (
      <Redirect to="/admin" />
    ) : (
      <View
        email={this.state.email}
        password={this.state.password}
        hasError={this.state.hasError}
        handleFieldChange={this.handleFieldChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;
