import {Link} from 'react-router-dom'

import "./../css/Layout.css"




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

        
  <footer className="card-footer bg-info ">
    <div>
      <a href="https://coreui.io">CoreUI</a>
      <span>&copy; 2020 creativeLabs.</span>
    </div>
    <div className="ml-auto">
      <span>Powered by</span>
      <a href="https://coreui.io">CoreUI</a>
    </div>
  </footer>


    </div>
        
    )


}

export default Layout