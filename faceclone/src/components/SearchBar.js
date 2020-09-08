import React from 'react';

function SearchBar() {
  return (
    <div class="search-bar col-md-4">
      <input type="search" placeholder="search" />
      <button class="btn btn-primary" type="button">Search</button>
    </div>
  )
}

export default SearchBar;