import React, { Component } from 'react';

const ToolBar = () => {
  return (
    <div className="sort-bar">
      <button className="btn btn-default">
        <i className="fa fa-sort-alpha-asc" />
        <span>Sort by name</span>
      </button>

      <button className="btn btn-default">
        <i className="fa fa-sort-numeric-asc" />
        <span>Sort by age</span>
      </button>
    </div>
  );
}

export default ToolBar;
