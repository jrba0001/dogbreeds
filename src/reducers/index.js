import { combineReducers } from 'redux';

import adminCatalog from './adminCatalog';
import publicList from './publicList';
import user from './user';

export default combineReducers({
  adminCatalog,
  publicList,
  user,
});
