import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { StyledWrapper, StyledSecondaryTitle } from '../components/App.styled';

const HomePage = () => {
  return (
    <StyledWrapper>
      <ContactForm />
      <StyledSecondaryTitle>Contacts</StyledSecondaryTitle>
      <Filter />
      <ContactList />
    </StyledWrapper>
  );
};

export default HomePage;
