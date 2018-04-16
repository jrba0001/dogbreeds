import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
    doLogout: PropTypes.func.isRequired,
  };
  componentDidMount() {
    if (this.props.isLogged) {
      this.props.doLogout();
    }
  }
  render() {
    if (!this.props.isLogged) {
      return <Redirect to="/" />;
    }
    return <div>Cargando...</div>;
  }
}

export default Logout;
