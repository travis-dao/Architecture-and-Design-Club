const Contact = () => {
    const email = 'nhhsadc@gmail.com';
    const instagram = 'nhhsadc';
    const remind = '@nhhsadc';
    const discord = 'https://discord.gg/yhFCVJJwJD';

    return (  
        <section className="contact">
            <div className="contact-container">
                <h1 id="background" className="background">Contact</h1>
                <p id="contact-1" className="gsap-reveal">Hi There! Wonderful to see you are trying to join our club. Whether you’re a potential member of someone looking to collaborate, we’re still excited to have you.</p>
                <div id="contact-2" className="contact-section">
                    <div className="contact-header">
                        <p className="important">Get in Touch</p>
                        <div className="bar"></div>
                    </div>
                    <div className="contact-info">
                        <h3 className="gsap-reveal" id="email">{ `Email - ${email}` }</h3>
                    </div>
                </div>
                <div id="contact-3" className="contact-section">
                    <div className="contact-header">
                        <p className="important">Follow Us</p>
                        <div className="bar"></div>
                    </div>
                    <div className="contact-info">
                        <h3 className="gsap-reveal">{ `Instagram - ${instagram}` }</h3>
                        <h3 className="gsap-reveal">{ `Remind - ${remind}` }</h3>
                        <h3 className="gsap-reveal"><a href={ discord } target="_blank" >{ `Discord - ${discord}` }</a></h3>
                    </div>
                </div>
            </div>
            <div id="contact-img" className="contact-img">
                <img src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </section>
    );
}
 
export default Contact;