import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { StyledWrapper } from '../components/App.styled';

const HomePage = () => {
    return (
    <StyledWrapper>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledWrapper>
  );
};

export default HomePage;
