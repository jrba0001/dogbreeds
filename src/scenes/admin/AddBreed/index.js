import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddBreedView from './view';
import { Preloader } from '../../../components';
import { adminCatalogLoadData, publicListSaveData } from '../../../actions';

const initialState = {
  searchValue: '',
  results: [],
};

class AddBreed extends Component {
  static defaultProps = {
    dataAll: {},
    dataList: [],
    fetched: false,
    error: undefined,
  };
  static propTypes = {
    dataAll: PropTypes.objectOf(PropTypes.any),
    dataList: PropTypes.arrayOf(PropTypes.any),
    fetched: PropTypes.bool,
    error: PropTypes.instanceOf(Error),
    adminCatalogLoadData: PropTypes.func.isRequired,
    publicListSaveData: PropTypes.func.isRequired,
  };
  state = initialState;
  componentDidMount() {
    if (!this.props.dataAll) {
      this.props.adminCatalogLoadData();
    }
  }
  addToList = (e) => {
    const breedName = e.target.value;
    // Busca si existe algún resultado en el estado "dataList" que coincida
    // Si existe no lo añade
    const existentResults = this.props.dataList.filter(v => v.name === breedName);
    if (existentResults.length === 0) {
      this.props.publicListSaveData(breedName);
    }
  };
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
    if (!this.props.fetched) {
      return <Preloader />;
    }
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }
    return (
      <AddBreedView
        searchValue={this.state.searchValue}
        updateSearchValue={this.updateSearchValue}
        results={this.state.results}
        addToList={this.addToList}
      />
    );
  }
}

const mapStateToProps = state => ({
  dataAll: state.adminCatalog.data,
  fetched: state.adminCatalog.fetched,
  error: state.adminCatalog.error,
});

const mapDispatchToProps = {
  adminCatalogLoadData,
  publicListSaveData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBreed);
