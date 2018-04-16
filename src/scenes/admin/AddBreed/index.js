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
  };
  static propTypes = {
    dataAll: PropTypes.objectOf(PropTypes.any),
  };
  state = initialState;
  updateSearchValue = (e) => {
    if (e.target.value.length) {
      this.setState({
        searchValue: e.target.value,
        results: Object.keys(this.props.dataAll).filter(v => v.includes(e.target.value)),
      });
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
      />
    );
  }
}

export default AddBreed;
