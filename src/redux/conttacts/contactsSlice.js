import { createSlice } from '@reduxjs/toolkit';

const initialContacts = { 
  contacts: [], 
  filter: '' 
};
const contactsItemsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    setContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, setFilter, deleteContact } =
  contactsItemsSlice.actions;

export const contactsReducer = contactsItemsSlice.reducer;
