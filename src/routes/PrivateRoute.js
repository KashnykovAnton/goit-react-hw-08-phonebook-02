import { Navigate } from 'react-router';
// import { Route, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function PrivateRoute({ component: ContactsPage }) {
  const isAuth = useSelector(authSelectors.getAuth);
  return <>{isAuth ? <ContactsPage /> : <Navigate to="/login" />}</>;
}

// export function PrivateRoute({ children, ...routeProps }) {
//   const isAuth = useSelector(contactsSelectors.getAuth);
//   return (
//     <Route {...routeProps}>
//       {isAuth ? children : <Navigate to="/login" />}
//     </Route>
//   );
// }
