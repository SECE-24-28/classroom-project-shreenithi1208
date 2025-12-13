import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <div>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/contact">Contact</Link>
                <br />
                <Link to="/learn-react">Learning React</Link>
            </div>
        </div>
    );
};

export default Landing;