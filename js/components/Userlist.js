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
        this.initListData = listData;
      }
    };
    request.send();

    this.state = {
      detailed: null
    };

    this.viewDetails = this.viewDetails.bind(this);
  }

  filter(props) {
    if (props.searchValue === '') return this.initListData;

    return _filter(this.initListData, (user) => {
      let words = user.name.split(' ');
      let match = false;
      words.forEach(function(el) {
        let index = el.toLowerCase().indexOf(props.searchValue);

        if (index >= 0 && index < 2 ) {
          match = true;
          return  match;
        }
      });

      return match;
    });
  }

  order(collection, props) {
    if (!props.sort) return collection;

    return _order( collection, [props.sort], [props.sortDir] );
  }

  viewDetails(user) {
    this.setState({
      detailed: user
    });
  }

  getProcessedList(props) {
    this.listData = this.order(this.filter(props), props);

    this.state.detailed = this.listData[0];
  }

  componentWillReceiveProps(newProps) {
    this.getProcessedList(newProps);
  }

  componentWillMount() {
    this.getProcessedList(this.props);
  }

  render() {
    if (!this.listData.length) return (
      <div className="row">
        <h1 className="text-center">Nothing was found...</h1>
      </div>
    );

    return (
      <div className="row">
        <div className="col-sm-3">
          <DetailedView user={ this.state.detailed } />
        </div>

        <div className="col-sm-9">
          <List viewDetails={ this.viewDetails } listData={ this.listData } />
        </div>
      </div>
    );
  }
}


export default Userlist;
