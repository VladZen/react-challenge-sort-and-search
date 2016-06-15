import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import Userlist from './components/Userlist';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',

    };
  }

  getData() {
    let request = new XMLHttpRequest();
    let listData;

    request.open('GET', 'data.json', false);
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200){
        listData = JSON.parse(request.response);
      }
    };
    request.send();

    return listData;
  }



  render() {
    return (
      <div className="container-fluid app">
        <div className="row">
          <div className="col-sm-12">
            <SearchBar text={this.state.searchText} />
            <ToolBar />
          </div>
        </div>

        <Userlist listData={this.getData()}/>
      </div>
    );
  }
}
