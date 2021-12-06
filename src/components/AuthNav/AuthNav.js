import styles from 'components/AuthNav/AuthNav.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;

export default function AuthNav() {
  return (
    <div className={styles.container}>
      <NavLink to="/register" exact="true" className={setActive}>
        Register
      </NavLink>
      <NavLink to="/login" exact="true" className={setActive}>
        Login
      </NavLink>
    </div>
  );
}
