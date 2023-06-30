import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { addContact, fetchContacts } from 'redux/contacts/thunks';
import { Notify } from 'notiflix';
import { StyledSection } from 'components/App.styled';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledAddBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (checkContact(name)) {
      Notify.failure(`${name} is already in contacts`);

      return;
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const checkContact = textName => {
    const normalizedName = textName.toLowerCase().trim();

    const foundName = items.find(
      ({ name }) => name.toLowerCase().trim() === normalizedName
    );
    return Boolean(foundName);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <StyledLabel htmlFor="number">Number</StyledLabel>
        <StyledInput
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
        />
        <StyledAddBtn type="submit">Add contact</StyledAddBtn>
      </StyledForm>
    </StyledSection>
  );
};

export default ContactForm;
