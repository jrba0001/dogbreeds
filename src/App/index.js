import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import View from './view';
import { publicListSaveData, publicListDelete } from '../actions';

class App extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
    publicListSaveData: PropTypes.func.isRequired,
    publicListDelete: PropTypes.func.isRequired,
  };
  addToList = (e) => {
    const breedName = e.target.value;
    // Busca si existe algún resultado en el estado "dataList" que coincida
    // Si existe no lo añade
    const existentResults = this.props.dataList.filter(v => v.name === breedName);
    if (existentResults.length === 0) {
      this.props.publicListSaveData(breedName);
    }
  };
  handleDelete = (e) => {
    if (e.target) {
      const breedName = e.target.value;
      this.props.publicListDelete(breedName);
    }
  };
  render() {
    return (
      <View
        dataList={this.props.dataList}
        addToList={this.addToList}
        handleDelete={this.handleDelete}
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
  publicListSaveData,
  publicListDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
