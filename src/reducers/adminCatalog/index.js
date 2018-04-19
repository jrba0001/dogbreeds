import {
  ADMIN_CATALOG_FETCH_START,
  ADMIN_CATALOG_FETCH_SUCCESS,
  ADMIN_CATALOG_FETCH_ERROR,
} from '../../actionTypes';

const initialState = {
  data: undefined,
  fetched: false,
  error: undefined,
};

const adminCatalogReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ADMIN_CATALOG_FETCH_START:
      return { ...state, fetched: false };
    case ADMIN_CATALOG_FETCH_SUCCESS:
      return {
        ...state,
        fetched: true,
        error: false,
        data: payload,
      };
    case ADMIN_CATALOG_FETCH_ERROR:
      return {
        ...state,
        fetched: true,
        error,
      };
    default:
      return state;
  }
};

export default adminCatalogReducer;
