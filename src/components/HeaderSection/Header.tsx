
import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, StyledNavLink,SearchBar } from './Header.styled'

const Header: React.FC = () => {
  const [searchTerm,setSearchTerm] = useState ('');
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm (e.target.value)
  }
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for')
  }
  return (
    <HeaderContainer>
      <Logo>VELI STORE</Logo>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/cart">Cart</StyledNavLink>
        <StyledNavLink to="/profile">Profile</StyledNavLink>
      </Navigation>
      <form>
        <SearchBar
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
         />
      </form>
    </HeaderContainer>
  );
};

export default Header;
