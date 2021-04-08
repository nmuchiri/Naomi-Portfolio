import {Link} from "react-router-dom"

// import css
import "./css/Home.css"

import { Container, Row} from 'react-bootstrap'


const Home =()=>{


return (
    <Container fluid className="container">
        <div>
            <div>
                <h1>Naomi Muchiri</h1>
            </div>
            <Container fluid>
            <Row>
                
                <img 
                id="afro-girl"
                alt="afro-girl"
                width="400" height="400"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk57hHGJuVJbFVA1F_fM6KuDmNf7KeNkLQqQ&usqp=CAU" 
                 />
               
            </Row>
            <p style={{fontSize:"10px"}}>Art by <a href="https://www.instagram.com/michaelsoistudio/?hl=en" target = "blank" rel ="noopener noreferrer"
           >Michael Soi</a></p>
            </Container>
           
        </div>

        <Row>
            <button type="submit"><Link to ={'/projects'}>My Projects</Link></button>
        </Row> 
        <br></br>
    </Container>
)

}

export default Home