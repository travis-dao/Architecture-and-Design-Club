const About = () => {
    return ( 
        <div className="About">
            <section id="about" className="about flex-row">
                <div>
                    <h1 className="gsap-reveal">High School</h1>
                    <h1 className="gsap-reveal">Collaborate</h1>
                    <h1 className="gsap-reveal">Develop</h1>
                </div>
                <div>
                    <h3 className="gsap-reveal">About Us</h3>
                    <p className="gsap-reveal">
                        We’re focused on our goal to get a deeper understanding of the principles of architecture and design while also incorporating them in our lives.
                    </p>
                    <br />
                    <p className="gsap-reveal">
                        Primary goal is to provide a platform for individuals to explore, learn, and grow within the realm of architecture and design. We organize a variety of events, from insightful lectures and engaging workshops aimed at enriching our members' knowledge and honing their skills. 
                    </p>
                    <br />
                    <p className="gsap-reveal">
                        We believe in the power of collaboration and shared inspiration. Whether you're a seasoned architect, have a bit of knowledge, or someone with a keen interest in the aesthetic and functional aspects of the built environment, you'll find a place among us.
                    </p>
                </div>
            </section>
            <section className="about-img-container">
                <div className="about-img-mask"></div>
                <div className="about-img"></div>
            </section>
            <section className="about-members flex-row">
                <div>
                    <div id="about-members-header" className="about-members-header">
                        <h3 className="gsap-reveal">Meet the Founders</h3>
                        <p className="gsap-reveal">Two high school students founded the Architecture and Design Club to explore their shared passion for creativity and innovation. The club serves as a platform for members to collaborate, share ideas, and develop their talents in these fields.</p>
                    </div>
                    <div id="member-1" className="member">
                        <div className="member-img">
                            <img src="people/jonathan.jpg" />
                        </div>
                        <h2 className="gsap-reveal">Jonathan Andrade</h2>
                        <p className="gsap-reveal">Co-Founder</p>
                    </div>
                </div>
                <div id="member-2" className="member">
                    <div className="member-img">
                        <img src="people/brian.jpg" />
                    </div>
                    <h2 className="gsap-reveal">Brian Kwak</h2>
                    <p className="gsap-reveal">Co-Founder</p>
                </div>
            </section>
        </div>
    );
}
 
export default About;