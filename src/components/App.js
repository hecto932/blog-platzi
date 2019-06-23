import React, { Component } from "react";

class App extends Component{
  constructor () {
    super();
    this.state = {
      users: []
    }
  }



  async componentDidMount () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    const data = await response.json()
    const users = data.map(u => ({
      name: u.name,
      email: u.email,
      link: u.website
    }))
    console.log(data)
    this.setState({
      users
    })
  }
  createRows = () => (
    this.state.users.map(u => (
      <tr>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.link}</td>
      </tr>
    ))
  )

  render () {
    return (
      <div className="margin">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.createRows()}
          </tbody>
        </table>
      </div>
    )
  }
};

export default App;
