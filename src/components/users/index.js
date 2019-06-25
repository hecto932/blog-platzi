import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal'
import Table from './Table'

class Users extends Component {
  componentDidMount() {
    const { users } = this.props
    if (!users.length) {
      this.props.getUsers();
    }
  }

  render() {
    const { isLoading, error } = this.props
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={this.props.error} />
    }

    return <Table />
  }
}

const mapStateToProps = reducers => {
  return reducers.usersReducer;
};

export default connect(
  mapStateToProps,
  usersActions
)(Users);
