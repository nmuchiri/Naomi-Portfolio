import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'



const Layout =(props)=>{

    return(
        <div>
            <div>
            <Navbar bg="light">
            <Navbar.Brand>
                <Link to ={'/home'}>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to ={'/about'}>About</Link>
                </Navbar.Brand>
            <Navbar.Brand>Projects</Navbar.Brand>
            <Navbar.Brand>Contacts</Navbar.Brand>
            </Navbar>
            </div>
            <div>
                {props.children}
            </div>
        </div>
        
    )


}

export default Layout