import { useState } from 'react';

const Lessons = () => {
    const [lessons, setLessons] = useState([
        { title: 'Introduction', date:'xx/xx/xx', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque esse id quia maiores nihil debitis, tempora voluptatum quam porro recusandae aut exercitationem eius blanditiis sequi veniam. A, quas nemo.', img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww', id: 1},
        { title: 'Lesson 1', date:'xx/xx/xx', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque esse id quia maiores nihil debitis, tempora voluptatum quam porro recusandae aut exercitationem eius blanditiis sequi veniam. A, quas nemo.', img: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', id: 2}
    ])

    return (  
        <section className="lessons">
            {lessons.map((lesson) => (
                <div id={ "lesson-" + lesson.id } className="lesson">
                    <a className="lesson-img">
                        <img src={ lesson.img } />
                    </a>
                    <div className="lesson-content">
                        <h2 className="gsap-reveal">{ lesson.title }</h2>
                        <h3 className="gsap-reveal">{ lesson.date }</h3>
                        <p className="gsap-reveal">{ lesson.body }</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
 
export default Lessons;