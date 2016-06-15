import React, { Component } from 'react';

const SearchBar = () => {
  return (
    <form className="search-bar form-group">
      <input className="form-control" type="text" placeholder="Search people by name..." />
    </form>
  );
}

export default SearchBar;
