import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Form, Results } from './components';

const AddBreed = ({
  searchValue, updateSearchValue, results, addToList,
}) => (
  <Fragment>
    <Form searchValue={searchValue} updateSearchValue={updateSearchValue} />
    <Results searchValue={searchValue} results={results} addToList={addToList} />
  </Fragment>
);

AddBreed.propTypes = {
  ...Form.propTypes,
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBreed;
