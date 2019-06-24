import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Table = props => {
  const { users } = props
  const createRows = () => {
    return users.map((u,k) => (
      <tr key={u.id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.website}</td>
        <td>
          <Link to={`/publications/${k}`} >
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <div className="margin">
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(Table);
