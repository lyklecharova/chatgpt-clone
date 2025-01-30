import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <img src="/orbital.png" alt=""  className='orbital'/>
            <div className="left">
                <h1>Lama AI</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit facere nostrum totam architecto.
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right"></div>
        </div>
    );
};

export default Homepage;
