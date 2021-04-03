import {Link} from 'react-router-dom'
// import React, { useState} from 'react'

import "./../css/Layout.css"

import {AiFillLinkedin } from "react-icons/ai"
import { FcAddressBook, FcCopyleft } from "react-icons/fc";




const Layout =(props)=>{

    // use state to change background color of each component
    // const [color, setColor]= useState('#00FFFF')

    return(
        <div>
            
            <nav className ="navbar">
                <ul>
                    <li className="nav-link">
                    <Link to ={'/home'}>Home</Link>
                    </li>

                    <li className="nav-link">
                        <Link to ={'/about'} >About</Link>
                    </li>

                    <li className="nav-link">
                        <Link to ={'/projects'}>Projects</Link>
                    </li>
                    <li className="nav-link">
                        <Link to ={'/contacts'}>Contacts</Link>
                    </li>
                </ul>
            </nav>
            {/* the part between the nav and the footer */}
        <div >
            {props.children}
        </div>
        {/* <div className= "section">

        </div> */}
          
  <footer className="footer">
     
      {/* <ul>
        <li>
            <a href="https://www.linkedin.com/in/nmuchiri/">LinkedIn<AiFillLinkedin></AiFillLinkedin></a>
        </li>
        <li>
            <a href="mailto:muchiri.w.naomi@gmail.com">E-mail<FcAddressBook></FcAddressBook></a>
        </li> */}
        <div><FcCopyleft></FcCopyleft>
        Naomi Muchiri 2021
        </div>
    {/* </ul> */}
    
  </footer>
 
    </div>
        
    )


}

export default Layout