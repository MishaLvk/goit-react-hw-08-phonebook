import {
  ListContact,
  ContactListList,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookOperations from 'components/redux/contacts/phonebookOperations';

import { selectContacts } from 'components/redux/contacts/selectors';

export default function ContactList() {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const contactsRedux = useSelector(selectContacts);
  const filterContacts = () => {
    const normalisedFilter = filterValue.toLocaleLowerCase();
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  return (
    <ListContact>
      {filterContacts().map(contact => (
        <ContactListList key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton
            onClick={() =>
              dispatch(phonebookOperations.deleteContact(contact.id))
            }
          >
            Delete
          </DeleteButton>
        </ContactListList>
      ))}
    </ListContact>
  );
}
