import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import View from './view';
import { publicListDelete } from '../actions';

class App extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
    publicListDelete: PropTypes.func.isRequired,
  };
  render() {
    return (
      <View
        dataList={this.props.dataList}
        addToList={this.addToList}
        isLogged={this.props.isLogged}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  dataList: state.publicList.data,
});

const mapDispatchToProps = {
  publicListDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
