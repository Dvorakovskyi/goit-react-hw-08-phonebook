import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { StyledMainTitle, StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledMainTitle>Phonebook</StyledMainTitle>
      <UserMenu />
    </StyledHeader>
  );
};

export default Header;
