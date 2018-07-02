import React from 'react'
import { Route } from 'react-router-dom'

import { Navigation } from './components'
import { StatsPage } from './components/stats'
import { TasksPage } from './components/tasks'

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path='/tasks' component={TasksPage}/>
      <Route exact path='/stats' component={StatsPage}/>
    </div>
  )
}

export default App
