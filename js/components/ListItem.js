import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  show() {
    this.props.onClick(this.props.user);
  }

  render() {
    return (
      <tr onClick={ () => this.show() }>
        <td>
          <img src={ 'images/' + this.props.user.image + '.svg' } />
        </td>

        <td>{ this.props.user.name }</td>
        <td>{ this.props.user.age }</td>
        <td>{ this.props.user.phone }</td>
      </tr>
    );
  }
}

export default ListItem;
