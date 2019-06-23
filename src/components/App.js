import React, { Component } from "react";

class App extends Component{
  constructor () {
    super();
    this.state = {
      users: [
        {
          name: 'Hector',
          email: 'hector@flores.com',
          link: 'hectorflores.com'
        },
        {
          name: 'Hector2',
          email: 'hector2@flores.com',
          link: 'hectorflores2.com'
        }
      ]
    }
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
