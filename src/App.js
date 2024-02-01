// components
import {Routes, Route, useLocation } from 'react-router-dom';
import withRouter from './withRouter';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Lessons from './Lessons';
import Contact from './Contact';
import Transition from './Transition';
import Watermark from './Watermark';

// visuals
import { animate, transition } from './Animations';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  let [state, setState] = useState('initial');

  // on page change
  useEffect(() => {
    if(state === 'initial') {
      transition();
      animate();
      setState('normal');
    }
    else {
      animate();
    }
  }, [location])

  return (
    <div className='app'>
      <Transition />
      <Watermark />
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