/* eslint-disable no-unused-expressions */

import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

// text animations
export function animate() {
    changeClassNames(ids);
    animateAll(ids);
}

function changeClassNames(ids) {
    const text = new SplitType('.gsap-reveal');
     
    ids.forEach( id => {
        const element = document.getElementById(id);
        if (element) {
            let children = element.querySelectorAll('.word');
            for (let i = 0; i< children.length; i++) {
                children[i].classList.replace('word', `word-${id}`);
            }
        }
    })
  }
  
function animateAll(ids) {
    ids.forEach( id => {
        const element = document.getElementById(id);
        if (element) {
            animateText(`.word-${id}`);
        }
    });

    animateImg();
}
  
function animateText(className) {
    gsap.from(className, {
        scrollTrigger: {
            trigger: className,
        },
        duration: 1,
        y: '100%',
        delay: 0.4
    });
}
  
// element animation
function animateImg() {
    let heroImg = document.getElementById('hero-img')
    if (heroImg) {
        gsap.to('#hero-img', {
            duration: 1.25,
            borderRadius: (13 * 16),
            delay: 1.5
        })
    }
    
    let contactImg = document.getElementById('contact-img')
    if (contactImg) {
        gsap.to('#contact-img', {
            duration: 1.25,
            borderRadius: (13 * 16),
            delay: 1.5
        })
    }
    
    let contactBackground = document.getElementById('background')
    if (contactBackground) {
        gsap.to('#background', {
            scrollTrigger: {
                trigger: '.body',
                start: 'top top',
                end: 'bottom center',
                scrub: true
            },
            x: '-100%',
            duration: 2
        })
    }
}

// transitions
const ids = ['hero', 'about', 'about-members-header', 'member-1', 'member-2', 'contact-1', 'contact-2', 'contact-3', 'lesson-1', 'lesson-2', 'lesson-3']

export function transition() {
    const main = document.getElementById('main');
    main.classList.add('no-scroll');

    const text = new SplitType('.transition-content');
    const element = document.getElementById('transition');
    let children = element.querySelectorAll('.char');
    for (let i = 0; i< children.length; i++) {
        children[i].classList.replace('char', 'char-transition');
    }

    const tl = gsap.timeline();
    tl.from('.char-transition', {
        duration: 0.5,
        y: '100%',
        stagger: 0.03
    })
    tl.to('.char-transition', {
        delay: 0.5,
        duration: 0.5,
        y: '-100%',
        stagger: 0.03
    })
    tl.fromTo('#transition', {
        y: '0'
    }, {
        y: '-100%',
        delay: 0.125,
        duration: 1,
        onStart: () => {
            changeClassNames(ids);
            animateAll(ids);
        },
        onComplete: () => {
            text.revert();
            main.classList.remove('no-scroll');
        }
    })
}