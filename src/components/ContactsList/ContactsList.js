import styles from 'components/ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { contactsSelectors } from 'redux/contacts';
import LoaderSpin from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export default function ContactsList() {
  const {
    data = [],
    error,
    isFetching,
  } = useGetContactsQuery(undefined, {
    refetchOnFocus: true,
  });

  const filter = useSelector(contactsSelectors.getFilter);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, data]);

  if (error) return toast.error(`There is an error: ${error}`);

  return (
    <>
      {isFetching && <LoaderSpin />}

      <ul>
        {!isFetching &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
      {data.length === 0 && !isFetching && (
        <h1 className={styles.title}>There are no contacts in phonebook!</h1>
      )}
    </>
  );
}
