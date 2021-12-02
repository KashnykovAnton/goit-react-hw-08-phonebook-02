import { Navigate } from 'react-router';

export function PrivateRoute({ isAuth, component: PrivatePage }) {
  return (
    <>
      <h1>Private</h1>
      {isAuth ? <PrivatePage /> : <Navigate to="/login" />}
    </>
  );
}
