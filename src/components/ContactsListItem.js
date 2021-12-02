import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export default function ContactsList({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  const onDelete = id => deleteContact(id);

  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
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
