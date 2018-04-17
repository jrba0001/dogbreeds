import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddBreedView from './view';

const initialState = {
  searchValue: '',
  results: [],
};

class AddBreed extends Component {
  static defaultProps = {
    dataAll: {},
    dataList: [],
  };
  static propTypes = {
    dataAll: PropTypes.objectOf(PropTypes.any),
    dataList: PropTypes.arrayOf(PropTypes.any),
    addToList: PropTypes.func.isRequired,
  };
  state = initialState;
  updateSearchValue = (e) => {
    const keywords = e.target.value;
    // Si hemos escrito algo en el input del formulario
    if (keywords.length) {
      // Resultados que coinciden dentro de "dataAll" (listado de nombres)
      const matches = Object.keys(this.props.dataAll).filter(v => v.includes(keywords));
      // Si se ha encontrado algún resultado que coincida con el keyword
      if (matches.length) {
        // Eliminamos los resultados que ya están añadidos en "dataList" (lista pública)
        const withoutCurrent = matches.filter((breedName) => {
          // Resultados de "dataList" que coinciden con el keyword
          const duplicated = this.props.dataList.filter(breedObj => breedObj.name === breedName);
          // Si no tiene coincidencias pasa, si tiene coincidencias se extrae
          return duplicated.length === 0;
        });
        this.setState({
          searchValue: keywords,
          results: withoutCurrent,
        });
      }
    } else {
      this.setState(initialState);
    }
  };
  render() {
    return (
      <AddBreedView
        searchValue={this.state.searchValue}
        updateSearchValue={this.updateSearchValue}
        results={this.state.results}
        addToList={this.props.addToList}
      />
    );
  }
}

export default AddBreed;
