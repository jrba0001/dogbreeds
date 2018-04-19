import React from 'react';
import { connect } from 'react-redux';

import { List } from '../../../components';

const BreedList = ({ data }) => <List data={data} />;

const mapStateToProps = state => ({
  data: state.publicList.data,
});

export default connect(mapStateToProps)(BreedList);
