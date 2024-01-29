import { useState } from 'react';

const Lessons = () => {
    const [lessons, setLessons] = useState([
        { title: 'Introduction', date:'Week 1', body: 'Understanding the fundamental rules and princibles of architecture with examples.', img: 'lessons/lesson1.jpg', link:'https://docs.google.com/presentation/d/1Df2G7ub3wRqvOyYs_eFn42utj9oSRlAzleUMq5R6W_k/edit#slide=id.g4dfce81f19_0_45' ,id: 1},
        { title: 'Brutalism', date:'Week 3', body: 'Disconvering Brutalism. Understanding how Brutalism came into the world.', img: 'lessons/lesson2.jpg', link:'https://docs.google.com/presentation/d/1Vco073E8Q5U3_YGCxoG4xf_gyujuu9_ZiLGqi-MDpsg/edit' , id: 2}
    ])

    return (  
        <section className="lessons">
            {lessons.map((lesson) => (
                <div id={ "lesson-" + lesson.id } className="lesson">
                    <a className="lesson-img" href={lesson.link} target='_blank'>
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