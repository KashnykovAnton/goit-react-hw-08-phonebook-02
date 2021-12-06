import styles from 'Pages/LoginPage/LoginPage.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunks';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginThunk(user));
    setEmail('');
    setPassword('');
  };

  const mailId = uuidv4();
  const passId = uuidv4();
  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={mailId}>
          Mail
        </label>
        <input
          className={styles.input}
          type="mail"
          name="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]"
          title="Email must be in the following order: characters@characters.domain"
          placeholder="Please enter email"
          required
          value={email}
          id={mailId}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor={passId}>
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          pattern="(?=.*\d).{6,}"
          title="Must contain at least 6 or more characters"
          placeholder="Please enter password"
          required
          value={password}
          id={passId}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
