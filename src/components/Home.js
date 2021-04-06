import {Link} from "react-router-dom"

// import css
import "./css/Home.css"

import {Col, Container, Image, Row} from 'react-bootstrap'


const Home =()=>{


return (
    <Container>
        <div>
            <div>
                <h1>Naomi Muchiri</h1>
            </div>
            <Container fluid>
            <Row>
                <Col xs={6} lg={4} >
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk57hHGJuVJbFVA1F_fM6KuDmNf7KeNkLQqQ&usqp=CAU" roundedCircle />
                </Col>
            </Row>
            </Container>
        </div>
        <br></br>
        <Row>
            <button type="submit"><Link to ={'/projects'}>My Projects</Link></button>
        </Row> 
        <br></br>
    </Container>
)

}

export default Home