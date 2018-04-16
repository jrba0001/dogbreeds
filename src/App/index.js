import React, { Component } from 'react';
import axios from 'axios';

import View from './view';

const ALL_KEY = 'dataAll';
const LIST_KEY = 'dataKey';
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
      />
    ) : (
      <div>Cargando...</div>
    );
  }
}

export default App;
