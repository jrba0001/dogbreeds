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
    if (keywords.length) {
      const matches = Object.keys(this.props.dataAll).filter(v => v.includes(keywords));
      if (matches.length) {
        const withoutCurrent = matches.filter((breedName) => {
          const duplicated = this.props.dataList.filter(breedObj => breedObj.name === breedName);
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
