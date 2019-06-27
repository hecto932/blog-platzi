import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {

  componentDidMount() {
    this.props.getTasks()
  }
  render () {
    console.log(this.props)
    return (
      <div>
        Tareas saludar
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer
const mapDispatchToProps = {
  ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)