import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  contactsReducer  from './conttacts/contactsSlice';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(contactsConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
