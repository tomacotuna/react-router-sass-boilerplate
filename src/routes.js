import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './containers/Root'
import Home from './containers/pages/HomePage'
import NotFound from './containers/pages/NotFound'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)
