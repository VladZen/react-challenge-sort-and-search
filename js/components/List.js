import React, { Component } from 'react';
import ListItem from './ListItem'

const List = () => {
  return (
    <table className="detailed-view__props table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        <ListItem user="{}" />
      </tbody>
    </table>
  );
}

export default List;
