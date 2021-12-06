import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

// export function PublicRoute({ component: PublicPage }) {
//   const isAuth = useSelector(contactsSelectors.getAuth);
//   return <>{isAuth ? <Navigate to="/" /> : <PublicPage />}</>;
// }

export function PublicRoute({
  redirectedTo = '/',
  restricted = false,
  component: PublicPage,
}) {
  const isAuth = useSelector(authSelectors.getAuth);
  const shouldNavigate = isAuth && restricted;
  return (
    <>{shouldNavigate ? <Navigate to={redirectedTo} /> : <PublicPage />}</>
  );
}
