// import Phonebook from './Phonebook/Phonebook';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Phonebook = lazy(() => import('./Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="login" />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterForm />}
              redirectTo={'/phonebook'}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginForm />}
              redirectTo={'/phonebook'}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute component={<Phonebook />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
