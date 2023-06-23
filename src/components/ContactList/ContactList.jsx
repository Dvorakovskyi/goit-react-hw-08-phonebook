import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { deleteContact } from 'redux/thunks';
import ContactItem from './ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';

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
    <>
      {isLoading ? <Loader /> :
        <section>
          {items.length > 0 ? (
            <ul>
              {foundContact.map(({ id, phone, name }) => (
                <ContactItem
                  contactsArray={items}
                  key={id}
                  name={name}
                  phone={phone}
                  onClick={() => dispatch(deleteContact(id))}
                />
              ))}
            </ul>
          ) : (
            <Notification />
          )}
        </section>}
    </>
  );
};

export default ContactList;
