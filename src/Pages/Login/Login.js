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
    console.log(user);
    dispatch(loginThunk(user));
    setEmail('');
    setPassword('');
  };

  const mailId = uuidv4();
  const passId = uuidv4();
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={mailId}>Mail</label>
        <input
          type="mail"
          name="email"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          // title="Email must be in the following order: characters@characters.domain"
          required
          value={email}
          id={mailId}
          onChange={handleChange}
        />
        <label htmlFor={passId}>Password</label>
        <input
          type="password"
          name="password"
          //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          //   title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          value={password}
          id={passId}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
