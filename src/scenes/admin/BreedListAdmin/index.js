import React from 'react';

import { List } from '../../../components';

const BreedListAdmin = ({ data, handleDelete }) => (
  <List isAdmin data={data} handleDelete={handleDelete} />
);

export default BreedListAdmin;
