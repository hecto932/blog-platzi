import React, { Component } from 'react'

class Publications extends Component {
  render () {
    const { key } = this.props.match.params
    return (
      <div className="margin">
        { key }
      </div>
    )
  }
}

export default Publications