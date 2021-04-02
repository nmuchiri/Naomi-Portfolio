import {Link} from 'react-router-dom'

// import css
import "./css/Home.css";


const Home =()=>{


return (
    <div className="container">
        <div 
        style={{
            backgroundImage: "linear-gradient(to right,#2193b0 0%,#6dd5ed 100%)",
            textAlign: "center"
          }}
        >
            <div>
                <h1>Naomi Muchiri</h1>
            </div>
            <div className="intro">
                <p >
                    I am an entrepreneurial individual with strong skills in full-stack software engineering.
                    I bring over ten years' experience in customer facing roles through work in retail and performing arts. In
                    addition, I am a divergent and quick thinker who can bring a creative bend to any enterprise.
                </p>
            </div>
        </div>
        <br></br>
        <div>
            <button type="submit"><Link to ={'/projects'}>My Projects</Link></button>
        </div> 
        <br></br>
    </div>
)

}

export default Home