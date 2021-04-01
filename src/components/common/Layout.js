import {Link} from 'react-router-dom'




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

        
    <footer className="page-footer font-small blue pt-4">
        <div className= "containter text-center">

        </div>
  

    </footer>

    </div>
        
    )


}

export default Layout