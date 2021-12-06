import styles from 'components/UserMenu/UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { logoutThunk } from 'redux/auth/authThunks';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUser);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
}
