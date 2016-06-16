import React, { Component } from 'react';
import ListItem from './ListItem'

const List = ({listData}) => {
  return (
    <table className="userlist table table-striped bordered">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {
          listData.map((item, index, arr) => {
            return <ListItem key={item.id} user={item} />
          })
        }
      </tbody>
    </table>
  );
}

export default List;
