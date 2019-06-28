import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as tasksActions from '../../actions/tasksActions'

import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'

class Save extends Component {

  handleChangeUserId = (event) => {
    this.props.changeUserId(event.target.value || 0)
  }
  handleChangeTitle = (event) => {
    this.props.changeTitle(event.target.value || 0)
  }

  handleSave = () => {
    const { user_id, title } = this.props
    const newTask = {
      user_id,
      title,
      completed: false
    }

    this.props.addTask(newTask)
  }


  handleDisableButton = () => {
    const { title, user_id, isLoading } = this.props

    if (isLoading) {
      return true
    }

    if (!user_id ||!title) {
      return true
    }
    return false
  }

  showAction = () => {
    const { error, isLoading } = this.props
    console.log(error, isLoading)

    if (isLoading) {
      return <Spinner />
    }

    if (error) {
      return <Fatal message={error} />
    }
  }

  render () {
    console.log(this.props)
    return (
      <div className="margin">
        {
          (this.props.redirect) ? <Redirect to="/tasks"/> : ''
        }
        <h1>Save task</h1>
        User id:
        <input type="number" onChange={this.handleChangeUserId}/>
        <br/>
        <br/>
        Title:
        <input type="text" onChange={this.handleChangeTitle} />
        <br/>
        <br/>
        <button disabled={ this.handleDisableButton() } onClick={this.handleSave}>
          Save
        </button>
        {this.showAction()}
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer
const mapDispatchToProps = {
  ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Save)