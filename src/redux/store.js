import { configureStore } from '@reduxjs/toolkit';
import {contactReduser} from './contactsSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactReduser);

export const store = configureStore({
  reducer: contactReduser,
});

// export const persistor = persistStore(store);
