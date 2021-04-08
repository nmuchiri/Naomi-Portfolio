// import css
import { Container, Row } from "react-bootstrap";
import "./css/Projects.css";

const Projects=() =>{
    return(
    <Container fluid className="container">
      <div>
        <h1>Projects Page</h1>
      </div>

      <div>
        <h3>Random Insult Generator</h3>
        <a href="https://nmuchiri.github.io/Random-Insult-Generator/"
           
           >
          <img
          alt="_insults"
            id="insults"
            src="data:image/jpeg;base64,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"
            width="300" height="300"
            />
        </a>
        </div>

        <p>
        This is a humorous and whimsical app I made using Vanilla JS to celebrate April as the national humour month.
        
        </p>
        <Row className="project-row">
        <div>
                <a href="https://nmuchiri.github.io/Random-Insult-Generator/" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    See Project
                    </button></a>
            </div> 
            <div>
                <a href="https://github.com/nmuchiri/Random-Insult-Generator" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    Code
                    </button></a>
           </div> 
      </Row>

      <div>
      <h3>Rick & Morty</h3>
        <a href="https://rickandmortyshowapp.herokuapp.com/"
           alt="_hats"
           >
          <img
            id="rick"
            src="https://resizing.flixster.com/sBJxQAwEVsgCLpbNJkqP0tbphIg=/fit-in/1152x864/v1.bjsyNTA0NTYyO2o7MTg3NzY7MTIwMDsyNTAwOzE4NzU"
            alt="rick and morty"
            width="300" height="300"
            />
        </a>
        <p>
          This is a fun Rick and Morty app created using Node JS 
        </p>
      </div>

      <Row className="project-row">
        <div>
                <a href= "https://rickandmortyshowapp.herokuapp.com/" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    See Project
                    </button></a>
            </div> 
            <div>
                <a href="https://github.com/nmuchiri/Project-2" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    Code
                    </button></a>
           </div> 
      </Row>
      <div>
      <h3>Fomo-Nomo</h3>
        <a href="https://fomo-nomo-frontend.surge.sh/"
           alt="fomo-nomo"
           >
          <img
            id="fomo"
            src="https://static8.depositphotos.com/1386392/883/v/600/depositphotos_8836901-stock-illustration-the-dancing-girl-with-colorful.jpg"
            alt="dancing girl"
            width="300" height="300"
            />
        </a>
        <p>
          This app is created using React on the frontend and Node JS on the backend. It allows users to search for online events happening around them. 
        </p>
      </div>

      <Row className="project-row">
        <div>
                <a href= "https://fomo-nomo-frontend.surge.sh/" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    See Project
                    </button></a>
            </div> 
            <div>
                <a href="https://github.com/SFX818/Team-5-frontend" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    Code
                    </button></a>
           </div> 
      </Row>
    
    </Container>    

    )
}
    
export default Projects