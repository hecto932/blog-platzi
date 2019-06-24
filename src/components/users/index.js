import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal'

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  createContent = () => {
    const { isLoading, error } = this.props
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={this.props.error} />
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
