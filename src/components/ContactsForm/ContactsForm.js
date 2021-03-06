import styles from 'components/ContactsForm/ContactsForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';
import { toast } from 'react-toastify';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

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

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ name, number });
    setName('');
    setNumber('');
  };

  const formSubmitHandler = item => {
    const normalizedName = item.name.toLowerCase();
    data.find(el => {
      return el.name.toLowerCase() === normalizedName;
    })
      ? toast.warn(`${item.name} is already in contacts`)
      : addContact(item);
  };

  const nameId = uuidv4();
  const telId = uuidv4();
  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameId}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="Please enter name"
        required
        value={name}
        id={nameId}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor={telId}>
        Number
      </label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        placeholder="Please enter number"
        required
        value={number}
        id={telId}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactsForm.propTypes = {
  state: PropTypes.objectOf(PropTypes.string),
};
