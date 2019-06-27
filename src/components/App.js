import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Users from './Users';
import Navbar from './Navbar'
import Tasks from './Tasks'
import TasksSave from './Tasks/Save'
import Publicactions from './Publications'

const App = props => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/tasks/save" component={TasksSave} />
      <Route exact path="/publications/:key" component={Publicactions} />
    </Switch>
  </BrowserRouter>
)

export default App