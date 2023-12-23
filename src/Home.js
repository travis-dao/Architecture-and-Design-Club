import { Link } from 'react-router-dom'

const Home = () => {
    return (  
        <section id="hero" className="hero">
            <h1 className="gsap-reveal">Architecture & Design Club</h1>
            <p className="gsap-reveal">We're a high school club. We provide an environment for future architects to collaborate and develop their skills</p>
            <Link className="flex-row" to='/about'>
                <p>Discover more</p>
                <i className="fa fa-arrow-right btn"></i>
            </Link>
            <div id="hero-img" className="hero-img"></div>
        </section>
    );
}
 
export default Home;