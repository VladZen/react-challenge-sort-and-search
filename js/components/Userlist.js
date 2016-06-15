import React, { Component } from 'react';
import DetailedView from './DetailedView';
import List from './List';

const Userlist = ({listData}) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <DetailedView />
      </div>

      <div className="col-sm-8">
        <List listData={listData} />
      </div>
    </div>
  );
}

export default Userlist;
