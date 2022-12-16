import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title, AddContact, Contacts } from './PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/selectors';
import * as phonebookOperations from 'components/redux/contacts/phonebookOperations';
import { useEffect } from 'react';

export default function Phonebook() {
  const contactsRedux = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(phonebookOperations.fetchContacts(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <Container className="Phonebook_container">
      <AddContact>
        <Title>Phonebook</Title>
        <ContactForm />
      </AddContact>
      <Contacts>
        <h2>Your contacts:</h2>
        {contactsRedux.length !== 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>You don't have any contacts saved yet </p>
        )}
      </Contacts>
    </Container>
  );
}
