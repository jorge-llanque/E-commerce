import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'

export default function GlobalRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}
