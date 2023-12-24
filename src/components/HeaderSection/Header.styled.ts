
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
