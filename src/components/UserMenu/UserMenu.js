import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/authOperations';
import { useAuth } from 'components/hooks/useAuth';
import { UserAuth, SubmitButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserAuth>
      <p>Welcome, {user.name}</p>
      <SubmitButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </SubmitButton>
    </UserAuth>
  );
};
