import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import DetailedView from './components/DetailedView';
import List from './components/List';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="row">
          <div className="col-sm-12">
            <SearchBar />
            <ToolBar />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <DetailedView />
          </div>

          <div className="col-sm-8">
            <List />
          </div>
        </div>
      </div>
    );
  }
}
