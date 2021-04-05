import {Link} from "react-router-dom"

import "./../css/Layout.css"
import { FcCopyleft } from "react-icons/fc"


    const Layout =(props)=>{

        return(
            <div> 
                <nav className ="navbar">
                    <ul>
                        <li className="nav-link" >
                        <Link to ={'/home'}>Home</Link>
                        </li>

                        <li className="nav-link">
                            <Link to ={'/about'} >About</Link>
                        </li>

                        <li className="nav-link">
                            <Link to ={'/projects'}>Projects</Link>
                        </li>
                        <li className="nav-link">
                            <Link to ={'/contact'}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            <div >
                {props.children}
            </div>
            
            <footer className="footer">
                    <div><FcCopyleft></FcCopyleft>
                    Naomi Muchiri 2021
                    </div>
                
            </footer>
        </div>
            
        )


    }

export default Layout