import { combineReducers } from 'redux';

import adminCatalog from './adminCatalog';
import user from './user';

export default combineReducers({
  adminCatalog,
  user,
});
