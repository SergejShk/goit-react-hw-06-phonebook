import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addContactToLS,
  addFilter,
  deleteContactFromLS,
} from './contactsActions';

const items = createReducer([], {
  [addContactToLS]: (state, { payload }) => [...state, payload],
  [deleteContactFromLS]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
