import { useState } from 'react';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/selectors';
import * as phonebookOperations from 'components/redux/contacts/phonebookOperations';

export default function ContactForm() {
  const contactsRedux = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkName(name)) {
      alert(name + ' is already in contacts');
      return false;
    }
    const contact = {
      name: name,
      number: number,
      // key: nanoid(),
    };
    dispatch(phonebookOperations.addContact(contact));
    reset();
    return true;
  };

  const checkName = name => {
    const normalisedFilter = name.toLocaleLowerCase();

    return contactsRedux.some(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add contact</h2>
      <Label className="Lable">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Name..."
        />
      </Label>
      <Label className="Lable">
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder="xxx-xx-xx"
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
}
