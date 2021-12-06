import styles from 'components/Navigation/Navigation.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;
// const setActive = ({ isActive }) => ({ color: isActive ? 'green' : 'blue' });

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getAuth);
  return (
    <nav className={styles.nav}>
      <NavLink to="/" exact="true" className={setActive}>
        HomePage
      </NavLink>

      {isAuth && (
        <NavLink to="/contacts" exact="true" className={setActive}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
