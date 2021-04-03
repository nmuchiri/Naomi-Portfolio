import { FaGithub, FaBootstrap, FaHtml5, FaJs, FaNode, FaPython, FaDatabase } from "react-icons/fa"

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
      <div className="col s4 m2 l2 icons">

        <div>
            <FaJs size="3em" ></FaJs>
        </div>
        <div>
         <FaNode size="3em" ></FaNode>
        </div>
        <div>
            <FaGithub size="3em" ></FaGithub>
        </div>
        <div>
            <FaBootstrap size="3em" ></FaBootstrap>
        </div>
        <div>
            <FaHtml5 size="3em"></FaHtml5>
        </div>
        <div>
            <FaPython size="3em"></FaPython>
        </div>
        <div>
        <FaDatabase size="3em" />
        </div>
        
      </div>
        </div>
    )

}

export default About