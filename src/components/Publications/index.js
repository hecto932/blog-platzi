import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'

class Publications extends Component {
  async componentDidMount() {
    const { getUsers, getPublicationsByUser } = this.props
    const { key:userId } = this.props.match.params
    if (!this.props.usersReducer.users.length) {
      await getUsers()
    }
    if (this.props.usersReducer.error) {
      return;
    }
    if (!('lastPublicationKey' in this.props.usersReducer.users[userId])) {
      getPublicationsByUser(userId)
    }
  }

  handleCreateUser = () => {
    const {
      usersReducer,
      match: { params: { key } }
    } = this.props

    if (usersReducer.error) {
      return <Fatal message={usersReducer.error}/>
    }

    if (!usersReducer.users.length || usersReducer.isLoading) {
      return <Spinner />
    }

    const { name } = usersReducer.users[key]

    return (
      <h1>{name} publications</h1>
    )
  }


  render () {
    console.log(this.props)
    const { key } = this.props.match.params
    return (
      <div className="margin">
        { this.handleCreateUser() }
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