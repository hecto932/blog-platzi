import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../General/Spinner';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  createContent = () => {
    if (this.props.isLoading) {
      return <Spinner />;
    }
    return (
      <div className="margin">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>{this.createRows()}</tbody>
        </table>
      </div>
    );
  };

  createRows = () => {
    const { users } = this.props;
    return users.map(u => (
      <tr key={u.id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.website}</td>
      </tr>
    ));
  };

  render() {
    console.log(this.props.isLoading);
    return this.createContent();
  }
}

const mapStateToProps = reducers => {
  return reducers.usersReducer;
};

export default connect(
  mapStateToProps,
  usersActions
)(Users);
