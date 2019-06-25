import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

class Publications extends Component {
  async componentDidMount() {
    const { key:userId } = this.props.match.params
    const { users } = this.props.usersReducer
    if (!users.length) {
      await this.props.getUsers()
    }
    this.props.getPublicationsByUser(userId)
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

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer
  }
}

const mapDispatchToProps = {
  ...usersActions,
  ...publicationsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications)