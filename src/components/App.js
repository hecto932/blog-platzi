import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Users from './Users';
import Navbar from './Navbar'
import Tasks from './Tasks'

const App = props => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Users} />
      <Route path="/tasks" exact component={Tasks} />
    </Switch>
  </BrowserRouter>
)

export default App