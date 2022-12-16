import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Nav } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Nav>
  );
};
