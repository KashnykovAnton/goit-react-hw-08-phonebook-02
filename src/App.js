import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import ContactsSection from './components/ContactsSection';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import ContactsFilter from './components/ContactsFilter';
// import NotFoundView from 'Pages/NotFoundView';
import HomePage from 'Pages/HomePage/HomePage';
import Login from 'Pages/Login/Login';
import Register from 'Pages/Register/Register';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk, logoutThunk } from 'redux/auth/authThunks';
import { contactsSelectors } from 'redux/contacts';

const isAuth = false;

export default function App() {
  const auth = useSelector(contactsSelectors.getAuth);
  const user = useSelector(contactsSelectors.getUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {auth && (
              <li>
                <h2>Welcome {user}</h2>
                <button type="button" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        {!auth && (
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute isAuth={isAuth} component={HomePage} />}
            />
            <Route
              path="/login"
              element={<PublicRoute isAuth={isAuth} component={Login} />}
            />
            <Route
              path="/register"
              element={<PublicRoute isAuth={isAuth} component={Register} />}
            />
            {/* <Route element={<NotFoundView />} /> */}
          </Routes>
        )}
        {auth && (
          <>
            <ContactsSection title="Phonebook">
              <ContactsForm />
            </ContactsSection>
            <ContactsSection title="Contacts">
              <ContactsFilter />
              <ContactsList />
            </ContactsSection>
          </>
        )}
      </main>
    </div>
  );
}
