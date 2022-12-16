import { useAuth } from 'components/hooks/useAuth';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavItem to="/">My phoneBook</NavItem>
      {isLoggedIn && <NavItem to="/phonebook"></NavItem>}
    </nav>
  );
};
