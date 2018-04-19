import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';

import View from './view';

const ALL_KEY = 'dataAll';
const LIST_KEY = 'dataList';

// Listado con todos los nombres de razas
const dataAllSrc = localStorage.getItem(ALL_KEY);
// Listado con las razas seleccionadas (nombre + imagen)
const dataListSrc = localStorage.getItem(LIST_KEY);
if (!dataListSrc) {
  localStorage.setItem(LIST_KEY, JSON.stringify([]));
}

class App extends Component {
  static defaultProps = {
    isLogged: false,
  };
  static propTypes = {
    isLogged: PropTypes.bool,
  };
  state = {
    // ¿Existen ya datos en localStorage?
    isReady: !!dataAllSrc && !!dataListSrc,
    dataAll: !!dataAllSrc && JSON.parse(dataAllSrc),
    dataList: !!dataListSrc && JSON.parse(dataListSrc),
  };
  componentDidMount() {
    if (!this.state.isReady) {
      axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
        if (response.data && response.data.message) {
          this.setState({
            isReady: true,
            dataAll: response.data.message,
          });
          localStorage.setItem(ALL_KEY, JSON.stringify(response.data.message));
        }
      });
    }
  }
  addToList = (e) => {
    const breedName = e.target.value;
    // Busca si existe algún resultado en el estado "dataList" que coincida
    // Si existe no lo añade
    const existentResults = this.state.dataList.filter(v => v.name === breedName);
    if (existentResults.length === 0) {
      axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`).then((response) => {
        if (response.data && response.data.message) {
          const breedObj = {
            name: breedName,
            image: response.data.message,
          };
          this.setState((prevState) => {
            const newData = prevState.dataList.concat(breedObj);
            localStorage.setItem(LIST_KEY, JSON.stringify(newData));
            return {
              dataList: newData,
            };
          });
        }
      });
    }
  };
  handleDelete = (e) => {
    const breedName = e.target.value;
    if (e.target) {
      this.setState((prevState) => {
        const newData = prevState.dataList.filter(breedObj => breedObj.name !== breedName);
        localStorage.setItem(LIST_KEY, JSON.stringify(newData));
        return {
          dataList: newData,
        };
      });
    }
  };
  render() {
    return this.state.isReady ? (
      <View
        dataAll={this.state.dataAll}
        dataList={this.state.dataList}
        addToList={this.addToList}
        handleDelete={this.handleDelete}
        isLogged={this.props.isLogged}
      />
    ) : (
      <div>Cargando...</div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(App);
