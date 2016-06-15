import React, { Component } from 'react';

const DetailedView = ({shown}) => {
  return (
    <div className="detailed-view bordered">
      <img className="detailed-view__avatar" src="#" />
      <h2 className="detailed-view__name text-center">Milton Davis</h2>

      <table className="detailed-view__props table table-responsive text-center">
        <tbody>
          <tr>
            <td>Age</td>
            <td>18</td>
          </tr>

          <tr>
            <td>Favorite animal:</td>
            <td>owl</td>
          </tr>

          <tr>
            <td>Phone:</td>
            <td>8 (88634) 958-8850</td>
          </tr>
        </tbody>
      </table>

      <p>
        <b>Favorite phrase:</b>

        Juile ejtaglo olzam fifi pirviju pawisu du dorkuwfo pu fefmelfer sunozod hovitado lalis idrefzec mudic.
      </p>
    </div>
  );
}

export default DetailedView;
