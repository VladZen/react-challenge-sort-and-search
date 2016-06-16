import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    this.props.onChange(this.refs.SearchInput.value);
  }

  render() {
    return (
      <form className="search-bar form-group">
        <input
         onChange={ () => this.handleChange() }
         className="form-control"
         type="text"
         ref="SearchInput"
         placeholder="Search people by name..." />
      </form>
    );
  }
}

export default SearchBar;
