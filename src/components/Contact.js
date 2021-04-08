// import css
import "./css/Contact.css";

//react icons
import {SiMinutemailer} from "react-icons/si"
import {AiFillLinkedin } from "react-icons/ai"


const Contact =()=>{
      return (
            <div className="container">
                <div>
                    <h2>Let's build something awesome together. <span>Reach out!!</span></h2>
                </div>
                <div>
                    <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/nmuchiri/" target = "blank" rel ="noopener noreferrer">LinkedIn<AiFillLinkedin color="purple"></AiFillLinkedin></a>
                            </li>
                            <li>
                                <a href="mailto:muchiri.w.naomi@gmail.com" target = "blank" rel ="noopener noreferrer">E-mail<SiMinutemailer color="purple"></SiMinutemailer></a>
                            </li> 
                     </ul>
                </div>
                <br></br>  
                <br></br>
            </div> 
                 
      );
    }

export default Contact