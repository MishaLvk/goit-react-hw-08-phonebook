import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  padding: 5px;
  color: black;
  &.active {
    color: red;
  }
`;
