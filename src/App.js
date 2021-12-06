import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { getCurrentUserThunk } from 'redux/auth/authThunks';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import { authSelectors } from 'redux/auth';
import LoaderSpin from 'components/Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import(
    'Pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);
const LoginPage = lazy(() =>
  import('Pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import(
    'Pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    'Pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrent ? (
        <LoaderSpin />
      ) : (
        <>
          <AppBar />
          <ToastContainer theme="colored" autoClose={2000} />
          <Suspense fallback={<LoaderSpin />}>
            <Routes>
              <Route
                path="/"
                exact="true"
                element={<PublicRoute component={HomePage} />}
              />

              <Route
                path="/contacts"
                exact="true"
                element={<PrivateRoute component={ContactsPage} />}
              />

              <Route
                path="/login"
                exact="true"
                element={
                  <PublicRoute
                    restricted
                    redirectedTo="/contacts"
                    component={LoginPage}
                  />
                }
              />

              <Route
                path="/register"
                exact="true"
                element={<PublicRoute restricted component={RegisterPage} />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}
