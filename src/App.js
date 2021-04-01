import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// component imports
import Home from "./components/Home"
import About from "./components/About"
import Layout from"./components/common/Layout"

const App =()=>{
  return (
    <Layout>
      <Switch>
        <Route exact path ={["/", "/home"]} component ={Home} />
        <Route excat path ="/about" component ={About} />
      </Switch>
    </Layout> 
  )
}

export default App