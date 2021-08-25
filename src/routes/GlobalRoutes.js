import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'

export default function GlobalRoutes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Layout>
    </Router>
  )
}
