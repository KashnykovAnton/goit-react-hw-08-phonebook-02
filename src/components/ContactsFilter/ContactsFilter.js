import styles from 'components/ContactsFilter/ContactsFilter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { contactsSelectors } from 'redux/contacts';

export default function ContactsFilter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const changeFilter = useCallback(
    e => {
      dispatch(filterContact(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.filter}>
      <label className={styles.label} htmlFor={uuidv4()}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={styles.input}
        value={filter}
        id={uuidv4()}
        onChange={changeFilter}
      />
    </div>
  );
}
