import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContactToLS = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  })
);
export const deleteContactFromLS = createAction('contacts/deleteContact');

export const addFilter = createAction('contacts/filter');
