import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contactsSlice';
import { deleteContact } from 'redux/contacts/thunks';
import ContactItem from './ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
import { StyledSection } from 'components/App.styled';
import { StyledLoaderWrapper } from 'components/Loader/Loader.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getContact = () => {
    const findContact = items.filter(({ name }) => {
      return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  const foundContact = getContact();

  return (
    <StyledSection>
      {!isLoading ? (
        <StyledSection>
          {items.length > 0 ? (
            <ul>
              {foundContact.map(({ id, number, name }) => (
                <ContactItem
                  contactsArray={items}
                  key={id}
                  name={name}
                  number={number}
                  onClick={() => dispatch(deleteContact(id))}
                />
              ))}
            </ul>
          ) : (
            <Notification />
          )}
        </StyledSection>
      ) : (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      )}
    </StyledSection>
  );
};

export default ContactList;
