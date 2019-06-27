import React, { Component } from 'react'

class Save extends Component {
  render () {
    return (
      <div className="margin">
        <h1>Save task</h1>
        User id:
        <input type="number" />
        <br/>
        <br/>
        Title: 
        <input />
        <br/>
        <br/>
        <button>
          Save
        </button>
      </div>
    )
  }
}

export default Save