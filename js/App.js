import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sort:       null,
      sortDir:    null
    };
    this.handleSort   = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSort(sortProp, sortDir) {
    this.setState({
      sort: sortProp,
      sortDir: sortDir
    });
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="row">
          <div className="col-sm-12">
            <SearchBar
              onChange={ this.handleSearch } />

            <ToolBar
              onChange={ this.handleSort }
              sort={ this.state.sort }
              sortDir={ this.state.sortDir } />
          </div>
        </div>

        <Userlist
         sort={ this.state.sort }
         sortDir={ this.state.sortDir }
         searchValue={ this.state.searchText } />
      </div>
    );
  }
}
