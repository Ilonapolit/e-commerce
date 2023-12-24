const Header: React.FC = () => {
    return (
      <HeaderContainer>
        <Logo>Your Logo</Logo>
        <Navigation>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/search">Search</NavLink>
          <NavLink href="/cart">Cart</NavLink>
          <NavLink href="/profile">Profile</NavLink>
        </Navigation>
      </HeaderContainer>
    );
  };
  
  export default Header;