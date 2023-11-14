import { createLogger } from 'redux-logger';
import contactsReducer from './conttacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  contacts: contactsReducer,
};

const logger = createLogger({
  collapsed: (_, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
