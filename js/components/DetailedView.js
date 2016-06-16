import React, { Component } from 'react';

const DetailedView = ({user}) => {
  if(!user) return (
    <div className="detailed-view bordered">
      <h2 className="detailed-view__name text-center">Nothing found</h2>
    </div>
  );

  return (
    <div className="detailed-view bordered">
      <img className="detailed-view__avatar" src={'images/' + user.image + '.svg'} />
      <h2 className="detailed-view__name text-center">{ user.name }</h2>

      <table className="detailed-view__props table table-responsive text-center">
        <tbody>
          <tr>
            <td>Age</td>
            <td>{ user.age }</td>
          </tr>

          <tr>
            <td>Favorite animal:</td>
            <td>{ user.image }</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>8 { user.phone }</td>
          </tr>
        </tbody>
      </table>

      <p className="detailed-view__quote">
        <b>Favorite phrase:</b>

        { user.phrase }
      </p>
    </div>
  );
}

export default DetailedView;
