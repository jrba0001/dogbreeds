import {
  PUBLIC_LIST_SAVING,
  PUBLIC_LIST_SAVE_SUCCESS,
  PUBLIC_LIST_DELETE,
} from '../../actionTypes';

const initialState = {
  data: [],
  saving: false,
};

const publicListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PUBLIC_LIST_SAVING:
      return { ...state, saving: true };
    case PUBLIC_LIST_SAVE_SUCCESS:
      return { ...state, saving: false, data: [...state.data, payload] };
    case PUBLIC_LIST_DELETE:
      return { ...state, data: state.data.filter(breedObj => breedObj.name !== payload) };
    default:
      return state;
  }
};

export default publicListReducer;
