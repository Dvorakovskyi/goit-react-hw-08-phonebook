import { contactReduser } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";

export const reducer = {
    contacts: contactReduser,
    auth: authReducer,
};