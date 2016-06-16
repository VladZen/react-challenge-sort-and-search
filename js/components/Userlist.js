import React, { Component } from 'react';
import DetailedView from './DetailedView';
import List from './List';
import _order from 'lodash/orderBy';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';


export default class Userlist extends Component {
  constructor(props) {
    super(props);
    let request = new XMLHttpRequest();
    let listData;

    request.open('GET', 'data.json', false);
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200){
        listData = JSON.parse(request.response);
      }
    };
    request.send();

    this.initListData = listData;
  }

  filter() {
    if (this.props.searchValue === '') return this.initListData;

    return _filter(this.initListData, (user) => {
      return _includes(user.name, this.props.searchValue);
    });
  }

  order(collection) {
    if (!this.props.sort) return collection;
    
    return _order( collection, [this.props.sort], [this.props.sortDir] );
  }

  render() {
    let listData = this.order(this.filter());

    return (
      <div className="row">
        <div className="col-sm-3">
          <DetailedView />
        </div>

        <div className="col-sm-9">
          <List listData={ listData } />
        </div>
      </div>
    );
  }
}


export default Userlist;
