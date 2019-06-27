import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tasksActions from '../../actions/tasksActions'
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

class Tasks extends Component {

  componentDidMount() {
    this.props.getTasks()
  }

  showContent = () => {
    const { tasks, isLoading, error } = this.props

    if (isLoading) {
      return <Spinner />
    }

    if (error) {
      return <Fatal message={error} />
    }

    return Object.keys(tasks).map((userId) => {
      return (
        <div key={userId}>
          <h2>User {userId}</h2>
          <div className="container-tasks">
            { this.listTasks(userId) }
          </div>
        </div>
      )
    })
  }

  listTasks = (userId) => {
    const { tasks } = this.props
    const eachUser = {
      ...tasks[userId]
    }

    return Object.keys(eachUser).map(taskId => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={eachUser[taskId].completed} />
        {
          eachUser[taskId].title
        }
      </div>
    ))
  }

  render () {
    console.log(this.props)
    return (
      <div className="margin">
        Tareas saludar
        {this.showContent()}
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer
const mapDispatchToProps = {
  ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)