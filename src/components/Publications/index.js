import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

class Publications extends Component {
  componentDidMount() {
    const { users } = this.props
    if (!users.length) {
      this.props.getUsers()
    }
  }
  render () {
    console.log(this.props)
    const { key } = this.props.match.params
    return (
      <div className="margin">
        <h2>Publications</h2>
        { key }
      </div>
    )
  }
}

const mapStateToProps = reducers => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Publications)