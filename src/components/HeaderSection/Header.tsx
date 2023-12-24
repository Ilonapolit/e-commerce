
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, StyledNavLink } from './Header.styled'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Your Logo</Logo>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/search">Search</StyledNavLink>
        <StyledNavLink to="/cart">Cart</StyledNavLink>
        <StyledNavLink to="/profile">Profile</StyledNavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
