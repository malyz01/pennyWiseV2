import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Nav from './Nav'
import Landing from './Landing'

const App = () => {
  return (
    <HashRouter>
      <Nav id={1} name="Sample" />
      <Route exact path="/" component={Landing} />
    </HashRouter>
  )
}

export default App
