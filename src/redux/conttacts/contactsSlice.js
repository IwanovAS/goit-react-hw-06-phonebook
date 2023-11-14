import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-111', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-211', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-311', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-411', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsItemsSlise = createSlice({
  name: 'items',
  initialState:
    JSON.parse(localStorage.getItem('contacts')) || initialContacts || [],
  reducers: {
    handleAddContact: (state, action) => [...state, action.payload],
    handleRemoveContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});

export const { handleAddContact, handleRemoveContact } =
  contactsItemsSlise.actions;
export const { filterContact } = contactsFilterSlice.actions;

const contactsReducer = combineReducers({
  [contactsItemsSlise.name]: contactsItemsSlise.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

export default contactsReducer;
