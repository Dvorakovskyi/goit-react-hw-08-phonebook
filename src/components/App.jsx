import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './Filter/Filter';
import { StyledWrapper } from './App.styled';

const App = () => {
  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledWrapper>
  );
};

export default App;
