import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserAuth = styled.div`
  min-width: 20%;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  text-decoration: none;

  align-items: center;
  color: black;

  font-weight: 600;
  font-size: 18px;

  &.active {
    color: red;
  }
`;
