import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'
// bug - 1 => TeamMatches component is not declared inside Route
// bug - 2 => ":" params should be place at "/team-matches/:id"
// bug - 3 => Switch component is not imported and also not used
// bug - 12 => exact is not defined before component pate in Route in line 16
// bug - 13 => exact is not defined before component pate in Route in line 17

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
