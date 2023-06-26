import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
});