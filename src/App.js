import { Switch, Route } from 'react-router-dom'

// component imports
import Home from "./components/Home"

const App =()=>{
  return (
    <Switch>
      <Route exact path ="/" component={Home} />
    </Switch>
  )
}

export default App