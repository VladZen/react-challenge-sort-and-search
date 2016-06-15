import React, { Component } from 'react';

const ListItem = ({user}) => {
  return (
    <tr>
      <td>
        <img src={user.image} />
      </td>

      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>
  );
}

export default ListItem;
