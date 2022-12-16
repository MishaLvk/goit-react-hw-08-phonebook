import { UserAuth, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <UserAuth>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </UserAuth>
  );
};
