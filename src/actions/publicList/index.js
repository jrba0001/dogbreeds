import axios from 'axios';

import {
  PUBLIC_LIST_SAVING,
  PUBLIC_LIST_SAVE_SUCCESS,
  PUBLIC_LIST_DELETE,
} from '../../actionTypes';

export const publicListSaving = () => ({
  type: PUBLIC_LIST_SAVING,
});

export const publicListSaveSuccess = payload => ({
  type: PUBLIC_LIST_SAVE_SUCCESS,
  payload,
});

export const publicListDelete = payload => ({
  type: PUBLIC_LIST_DELETE,
  payload,
});

export const publicListSaveData = breedName => (dispatch) => {
  dispatch(publicListSaving());
  return axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`).then((response) => {
    if (response.data && response.data.message) {
      const breedObj = {
        name: breedName,
        image: response.data.message,
      };
      return dispatch(publicListSaveSuccess(breedObj));
    }
  });
};
