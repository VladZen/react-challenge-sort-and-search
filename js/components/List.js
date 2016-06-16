import React, { Component } from 'react';
import ListItem from './ListItem'

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  viewDetails(user) {
    this.props.viewDetails(user);
  }

  render() {
    let listData = this.props.listData;

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
              return <ListItem onClick={ (item) => this.viewDetails(item) } key={item.id} user={item} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default List;
