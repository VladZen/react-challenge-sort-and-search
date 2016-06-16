import React, { Component } from 'react';

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.oldOrder = {
      prop: this.props.sort,
      dir:  this.props.sortDir
    }
  }

  handleClick(orderProp) {
    let dir;
    if (this.oldOrder.prop !== orderProp) {
      dir = 'asc';
    } else {
      dir = this.oldOrder.dir === 'asc' ? 'desc' : 'asc';
    }

    this.oldOrder = {
      prop: orderProp,
      dir:  dir
    };

    this.props.onChange(orderProp, dir);
  }

  watchIcon(orderProp) {
    return this.oldOrder.prop === orderProp ? 'fa fa-sort-alpha-' + this.oldOrder.dir : 'hidden';
  }

  render() {
    let self = this;

    return (
      <div className="sort-bar">
        <button onClick={ () => this.handleClick('name') } className="btn btn-default">
          <i className={ self.watchIcon('name') } />
          <span>Sort by name</span>
        </button>

        <button onClick={ () => this.handleClick('age') } className="btn btn-default">
          <i className={ self.watchIcon('age') } />
          <span>Sort by age</span>
        </button>
      </div>
    );
  }

}

export default ToolBar;
