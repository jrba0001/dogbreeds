import React, { Component } from 'react';
import axios from 'axios';

import View from './view';

const ALL_KEY = 'dataAll';
const LIST_KEY = 'dataList';
const LOGGED_KEY = 'isLogged';

// Listado con todos los nombres de razas
const dataAllSrc = localStorage.getItem(ALL_KEY);
// Listado con las razas seleccionadas (nombre + imagen)
const dataListSrc = localStorage.getItem(LIST_KEY);
const isLoggedSrc = localStorage.getItem(LOGGED_KEY);
if (!dataListSrc) {
  localStorage.setItem(LIST_KEY, JSON.stringify([]));
}

class App extends Component {
  state = {
    isLogged: isLoggedSrc && JSON.parse(isLoggedSrc),
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
  changeLoginState = (value) => {
    this.setState({
      isLogged: value,
    });
    localStorage.setItem(LOGGED_KEY, JSON.parse(value));
  };
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
  doLogin = () => {
    this.changeLoginState(true);
  };
  doLogout = () => {
    this.changeLoginState(false);
  };
  render() {
    return this.state.isReady ? (
      <View
        dataAll={this.state.dataAll}
        dataList={this.state.dataList}
        isLogged={this.state.isLogged}
        doLogin={this.doLogin}
        doLogout={this.doLogout}
        addToList={this.addToList}
        handleDelete={this.handleDelete}
      />
    ) : (
      <div>Cargando...</div>
    );
  }
}

export default App;
