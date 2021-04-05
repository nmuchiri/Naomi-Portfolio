

//react icons
import {SiMinutemailer} from "react-icons/si"
import {AiFillLinkedin } from "react-icons/ai"


const Contact =()=>{
      return (
            <div className="container">
                <div>
                    <h1>Let's make something awesome together. Reach out!!</h1>
                </div>
                <div>
                    <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/nmuchiri/" target = "blank" rel ="noopener noreferrer">LinkedIn<AiFillLinkedin color="purple"></AiFillLinkedin></a>
                            </li>
                            <li>
                                <a href="mailto:muchiri.w.naomi@gmail.com" target = "blank" rel ="noopener noreferrer">E-mail<SiMinutemailer></SiMinutemailer></a>
                            </li> 
                     </ul>
                </div>
            </div>        
      );
    }

export default Contact