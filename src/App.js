import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


// component imports
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import Layout from"./components/common/Layout"



const App =()=>{


  return (
    
    <Layout>
      <Switch>
        <Route exact path ={["/", "/home"]} component ={Home} />
        <Route exact path ="/about" component ={About} />
        <Route exact path ="/projects" component ={Projects} />
        <Route exact path ="/contact" component ={Contact} />
      </Switch>
    </Layout> 
  )
}

export default App