import styles from 'components/AppBar.module.css';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function AppBar() {
  const isAuth = useSelector(authSelectors.getAuth);
  // const isFetchingCurrent = useSelector(contactsSelectors.getIsFetchingCurrent);
  // const isAuthAndFetching = isAuth && !isFetchingCurrent;
  return (
    // <header style={styles.header}>
    <header className={styles.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
