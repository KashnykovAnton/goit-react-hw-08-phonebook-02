import styles from 'components/AppBar/AppBar.module.css';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { authSelectors } from 'redux/auth';

export default function AppBar() {
  const isAuth = useSelector(authSelectors.getAuth);
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
