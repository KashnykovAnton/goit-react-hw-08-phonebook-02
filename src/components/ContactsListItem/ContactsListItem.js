import styles from 'components/ContactsListItem/ContactsListItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export default function ContactsList({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  const onDelete = id => deleteContact(id);

  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}:</span>
      <span className={styles.number}>{number}</span>
      <button
        type="button"
        className={styles.button}
        id={id}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
