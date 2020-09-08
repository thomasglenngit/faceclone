import React from 'react';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div class="header-row">
      <NavButtons />
      <span class="col-md-4"></span>
      <SearchBar />
    </div>
  )
}

export default Header;