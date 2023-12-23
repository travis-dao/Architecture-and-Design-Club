// components
import {Routes, Route, useLocation } from 'react-router-dom';
import withRouter from './withRouter';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Lessons from './Lessons';
import Contact from './Contact';
import Transition from './Transition';

// visuals
import { changeClassNames, animate, transition } from './Animations';
import { useEffect, useState } from 'react';

function App() {
  const ids = ['hero', 'about', 'about-members-header', 'member-1', 'member-2', 'contact-1', 'contact-2', 'contact-3', 'lesson-1', 'lesson-2', 'lesson-3']
  const location = useLocation();
  let [state, setState] = useState('initial');

  // on page change
  useEffect(() => {
    if(state === 'initial') {

      transition();
      setTimeout(() => {
        setState('normal');
        animationSetUp(ids);
      }, 1700)
    }
    else {
      animationSetUp(ids);
    }
  }, [location])

  return (
    <div className='app'>
      <Transition />
      <header>
        <Navbar />
      </header>
      <main id='main'>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/lessons' element={ <Lessons /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </main>
    </div>
  );
}

export default withRouter(App);

function animationSetUp(ids, app) {
  changeClassNames(ids);
  animate(ids);
}