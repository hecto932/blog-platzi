import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tasksActions from '../../actions/tasksActions'

class Save extends Component {

  handleChangeUserId = (event) => {
    this.props.changeUserId(event.target.value || 0)
  }
  handleChangeTitle = (event) => {
    this.props.changeTitle(event.target.value || 0)
  }
  render () {
    console.log(this.props)
    return (
      <div className="margin">
        <h1>Save task</h1>
        User id:
        <input type="number" defaultValue={this.props.user_id} onChange={this.handleChangeUserId}/>
        <br/>
        <br/>
        Title:
        <input onChange={this.handleChangeTitle} />
        <br/>
        <br/>
        <button>
          Save
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer
const mapDispatchToProps = {
  ...tasksActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Save)