import React, { Component } from 'react';

import View from './view';

class Login extends Component {
  state = {
    hasError: false,
    email: '',
    password: '',
  };
  handleFieldChange = key => (e) => {
    this.setState({
      [key]: e.target.value,
    });
  };
  render() {
    return (
      <View
        email={this.state.email}
        password={this.state.password}
        hasError={this.state.hasError}
        handleFieldChange={this.handleFieldChange}
      />
    );
  }
}

export default Login;
