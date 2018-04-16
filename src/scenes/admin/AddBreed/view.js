import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Form, Results } from './components';

const AddBreed = ({ searchValue, updateSearchValue, results }) => (
  <Fragment>
    <Form searchValue={searchValue} updateSearchValue={updateSearchValue} />
    <Results searchValue={searchValue} results={results} />
  </Fragment>
);

AddBreed.propTypes = {
  ...Form.propTypes,
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBreed;
