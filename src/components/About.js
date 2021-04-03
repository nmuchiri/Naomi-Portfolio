import { FaGithub, FaBootstrap, FaHtml5, FaJs, FaNode, FaPython, FaDatabase, FaCss3 } from "react-icons/fa"
import { DiMongodb } from "react-icons/di";
import { SiFlask, SiPostgresql, SiPostman } from "react-icons/si";

// import css
import "./css/About.css";

const About =()=>{
    return(
        <div className="container">
            <div>
                <h1>This is all about me</h1>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1toWlS6dtNsGZZ6w-53z2db8c9sEfg5nf/view?usp=sharing"
                    ><button>
                    My Resume
                    </button></a>
            </div> 
            <div>
                <h1>My skills</h1>
            </div>
            <div className="row">
            <div className="col-sm">
                <h6>JavaScript</h6>
                <FaJs size="2em" ></FaJs>
            </div>
            <div className="col-sm">
                <FaNode size="2em" ></FaNode>
            </div>
            <div className="col-sm">
                <FaGithub size="2em" ></FaGithub>
            </div>
            <div className="col-sm"> 
                <FaBootstrap size="2em" ></FaBootstrap>
            </div>
            <div className="col-sm">
                <FaHtml5 size="2em"></FaHtml5>
            </div>
            <div className="col-sm">
                <FaPython size="2em"></FaPython>
            </div>
            <div className="col-sm">
                <FaDatabase size="2em"></FaDatabase>
            </div>
            <div className="col-sm">
                <FaCss3 size="2em"></FaCss3>
            </div>
            <div className="col-sm">
                <DiMongodb size="2em"></DiMongodb>
            </div>
            <div className="col-sm">
                <SiFlask size="2em"></SiFlask>
            </div>
            <div className="col-sm">
                <SiPostgresql size= "2em"></SiPostgresql>
            </div>
            <div className="col-sm">
                <SiPostman size= "2em"></SiPostman>
            </div>
        
        </div>
    </div>
    )

}

export default About