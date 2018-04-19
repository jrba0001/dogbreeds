import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userLogout } from '../../../actions';
import { Preloader } from '../../../components';

class Logout extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
    userLogout: PropTypes.func.isRequired,
  };
  componentDidMount() {
    if (this.props.isLogged) {
      this.props.userLogout();
    }
  }
  render() {
    if (!this.props.isLogged) {
      return <Redirect to="/" />;
    }
    return <Preloader />;
  }
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
