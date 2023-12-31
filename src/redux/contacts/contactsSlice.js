import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './thunks';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilledFetchContacts = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
};

const handleFulfilledAddContact = (state, action) => {
  state.contacts.items.push(action.payload);
  state.contacts.isLoading = false;
};

const handleFulfilledDeleteContact = (state, action) => {
  const contactToDelete = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
  state.contacts.items = contactToDelete;
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
  reducers: {
    setFilter: (state, action) => ({ ...state, filter: action.payload }),
  },
});

export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const { setFilter } = contactsSlice.actions;
