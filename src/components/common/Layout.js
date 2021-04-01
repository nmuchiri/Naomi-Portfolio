import {Link} from 'react-router-dom'

import "./../css/Layout.css"

import {AiFillLinkedin } from "react-icons/ai"
import { FcAddressBook, FcCopyleft } from "react-icons/fc";




const Layout =(props)=>{

    return(
        <div>
            
            <nav className ="navbar navbar-expand-sm bg-info">
                <ul className ="navbar-nav">
                    <li className="nav-link">
                    <Link to ={'/home'}>Home</Link>
                    </li>

                    <li className="nav-link">
                        <Link to ={'/about'}>About</Link>
                    </li>

                    <li className="nav-link">
                        <Link to ={'/projects'}>Projects</Link>
                    </li>
                    <li className="nav-link">
                        <Link to ={'/contacts'}>Contacts</Link>
                    </li>
                </ul>
            </nav>
        <div>
            {props.children}
        </div>

        
  <div className=" sidebar">
    <div>
      <a href="https://www.linkedin.com/in/nmuchiri/">LinkedIn<AiFillLinkedin></AiFillLinkedin></a>
    </div>
    <div>
      <a href="mailto:muchiri.w.naomi@gmail.com">E-mail<FcAddressBook></FcAddressBook></a>
    </div>
    <div><FcCopyleft></FcCopyleft>
    Naomi Muchiri 2021
    </div>

  </div>


    </div>
        
    )


}

export default Layout