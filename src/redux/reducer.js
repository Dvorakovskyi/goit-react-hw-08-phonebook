import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const persistedReducer = persistReducer(persistConfig, authReducer)
export const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: persistedReducer,
});

