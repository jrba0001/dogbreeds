import axios from 'axios';

import {
  ADMIN_CATALOG_FETCH_START,
  ADMIN_CATALOG_FETCH_SUCCESS,
  ADMIN_CATALOG_FETCH_ERROR,
} from '../../actionTypes';

export const adminCatalogFetchStart = () => ({
  type: ADMIN_CATALOG_FETCH_START,
});

export const adminCatalogFetchSuccess = payload => ({
  type: ADMIN_CATALOG_FETCH_SUCCESS,
  payload,
});

export const adminCatalogFetchError = data => ({
  type: ADMIN_CATALOG_FETCH_ERROR,
  error: data,
});

export const adminCatalogLoadData = () => (dispatch) => {
  dispatch(adminCatalogFetchStart());
  return axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
    if (response.data && response.data.message) {
      return dispatch(adminCatalogFetchSuccess(response.data.message));
    }
    return dispatch(adminCatalogFetchError(new Error('Hubo un problema conectando con la API')));
  });
};
