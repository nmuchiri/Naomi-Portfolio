import { FaGithub, FaBootstrap, FaHtml5, FaJs, FaNode, FaPython, FaDatabase, FaCss3 } from "react-icons/fa"
import { DiMongodb } from "react-icons/di";
import { SiFlask, SiPostgresql, SiPostman } from "react-icons/si";

// import css
import "./css/About.css";

//bootstrap
import Row from 'react-bootstrap/Row'

const About =()=>{
    return(
        <div className="container">
            <div>
                <h1>About Me</h1>
            </div>
            <div className="intro">
                <p >
                    I am an entrepreneurial individual with strong skills in full-stack software engineering.
                    I bring over ten years' experience in customer facing roles through work in retail and performing arts. In
                    addition, I am a divergent and quick thinker who can bring a creative bend to any enterprise.
                </p>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1toWlS6dtNsGZZ6w-53z2db8c9sEfg5nf/view?usp=sharing" target = "blank" rel ="noopener noreferrer"
                    ><button>
                    My Resume
                    </button></a>
            </div> 
            <div>
                <h1>My skills</h1>
            </div>
            <Row>
                <div className="col-sm">
                    <div>JavaScript</div>
                    <FaJs size="2em" ></FaJs>
                </div>

                <div className="col-sm">
                    <div>Node JS</div>
                    <FaNode size="2em" ></FaNode>
                </div>

                <div className="col-sm">
                    <div>Git Hub</div>
                    <FaGithub size="2em" ></FaGithub>
                </div>

                <div className="col-sm"> 
                    <div>Bootstrap</div>
                    <FaBootstrap size="2em" ></FaBootstrap>
                </div>

                <div className="col-sm">
                    <div>HTML</div>
                    <FaHtml5 size="2em"></FaHtml5>
                </div>

                <div className="col-sm">
                    <div>Python</div>
                    <FaPython size="2em"></FaPython>
                </div>
            </Row>
            <br></br>
            <Row>
                <div className="col-sm">
                    <div>SQL</div>
                    <FaDatabase size="2em"></FaDatabase>
                </div>
                <div className="col-sm">
                    <div>CSS</div>
                    <FaCss3 size="2em"></FaCss3>
                </div>
                <div className="col-sm">
                    <div>MongoDB</div>
                    <DiMongodb size="2em"></DiMongodb>
                </div>
                <div className="col-sm">
                    <div>Flask</div>
                    <SiFlask size="2em"></SiFlask>
                </div>
                <div className="col-sm">
                    <div>PostgreSql</div>
                    <SiPostgresql size= "2em"></SiPostgresql>
                </div>
                <div className="col-sm">
                    <div>Postman</div>
                    <SiPostman size= "2em"></SiPostman>
                </div>
        
            </Row>
        </div>
    )

}

export default About