
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4CAF50; 
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;


export const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  width: 200px; 
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; 
  }
`;
