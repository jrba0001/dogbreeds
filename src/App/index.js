import React, { Component } from 'react';
import axios from 'axios';

import View from './view';

const ALL_KEY = 'dataAll';
const LIST_KEY = 'dataKey';
const LOGGED_KEY = 'isLogged';

const dataAllSrc = localStorage.getItem(ALL_KEY);
const dataListSrc = localStorage.getItem(LIST_KEY);
const isLoggedSrc = localStorage.getItem(LOGGED_KEY);
if (!dataListSrc) {
  localStorage.setItem('LIST_KEY', JSON.stringify([]));
}

class App extends Component {
  state = {
    isLogged: isLoggedSrc && JSON.parse(isLoggedSrc),
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
  render() {
    return this.state.isReady ? (
      <View
        dataAll={this.state.dataAll}
        dataList={this.state.dataList}
        isLogged={this.state.isLogged}
      />
    ) : (
      <div>Cargando...</div>
    );
  }
}

export default App;
