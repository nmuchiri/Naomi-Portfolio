import {Link} from 'react-router-dom'

// import css
import "./css/Home.css";


const Home =()=>{


return (
    <div className="container"
    style={{
        backgroundImage: "linear-gradient(to right,#ff8733 0%,#fa1100 100%)",
        // height: 100,
        // marginTop: 10,
        // textAlign: "center"
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
        <button type="submit"><Link to ={'/projects'}>My Projects</Link></button>
    </div>
)

}

export default Home