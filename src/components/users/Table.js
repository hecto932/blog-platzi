import React from 'react';
import { connect } from 'react-redux'

const Table = props => {
  const { users } = props
  const createRows = () => {
    return users.map(u => (
      <tr key={u.id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.website}</td>
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
