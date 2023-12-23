import { Link } from 'react-router-dom'

const Home = () => {
    return (  
        <div className="navbar">
            <Link className="logo" to="/">
                <img src="logo.png" />
            </Link>
            <div className="links">
                <Link to='/about'>About</Link>
                <Link to='/lessons'>Lessons</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
}
 
export default Home;