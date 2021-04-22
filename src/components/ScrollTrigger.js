import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hexagon from 'react-hexagon'
import './ScrollTrigger.scss';

gsap.registerPlugin(ScrollTrigger);

const starters = [ 
  {title: 'Title 1', subtitle: 'Subtitle 1'},
  {title: 'Title 2', subtitle: 'Subtitle 2'},
  {title: 'Title 3', subtitle: 'Subtitle 3'},
  {title: 'Title 4', subtitle: 'Subtitle 3'},
];

const potaotes = [ 
  {title: 'Title 1', subtitle: 'Subtitle 1'},
  {title: 'Title 2', subtitle: 'Subtitle 2'},
  {title: 'Title 3', subtitle: 'Subtitle 3'},
  {title: 'Title 4', subtitle: 'Subtitle 4'},
  {title: 'Title 5', subtitle: 'Subtitle 5'},
];

const Proud = [ 
  {title: 'Title 1', subtitle: 'Subtitle 1'},
  {title: 'Title 2', subtitle: 'Subtitle 2'},
  {title: 'Title 3', subtitle: 'Subtitle 3'},
  {title: 'Title 4', subtitle: 'Subtitle 4'},
  {title: 'Title 5', subtitle: 'Subtitle 5'},
];

const Group = [ 
  {title: 'Title 1', subtitle: 'Subtitle 1'},
  {title: 'Title 2', subtitle: 'Subtitle 2'},
  {title: 'Title 3', subtitle: 'Subtitle 3'},
  {title: 'Title 4', subtitle: 'Subtitle 4'},
  {title: 'Title 5', subtitle: 'Subtitle 5'},
];


export default function AddScrollTrigger() {

  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {

    gsap.from(headerRef.current, {
      duration: 1, 
      autoAlpha: 0, 
      ease: 'none' ,
      delay: 1
    });

    revealRefs.current.forEach((e, index) => {
      
      gsap.fromTo(e, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: e,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
          markers: true
        }
      });
    })

  }, [])

  const addToRefs = (e) => {
    if (e && !revealRefs.current.includes(e)){
      revealRefs.current.push(e);
    }
  }

  return (
    <>
      {
        starters.map(({title, subtitle}) => {
          return (
            <Hexagon className='starter' style={{stroke: '#5c4603'}}>
              <div key={title} ref={addToRefs}>
                <h2 className='h2'>{title} </h2>
                <p className='p'>{subtitle} </p>
              </div>
            </Hexagon>
          )
        })
      }
      {
        potaotes.map(({title, subtitle}) => {
          return (
            <Hexagon className='potaotes' style={{stroke: '#5c4603'}}>
              <div key={title} ref={addToRefs}>
                <h2 className='h21'>{title} </h2>
                <p className='p1'>{subtitle} </p>
              </div>
            </Hexagon>
          )
        })
      }
      {
        Proud.map(({title, subtitle}) => {
          return (
            <Hexagon className='proud' style={{stroke: 'orange'}} backgroundImage='/images/test.svg'>
              <div key={title} ref={addToRefs}>
                <h2 className='h21'>{title} </h2>
                <p className='p1'>{subtitle} </p>
              </div>
            </Hexagon>
          )
        })
      }
      {
        Group.map(({title, subtitle}) => {
          return (
            <Hexagon className='group' style={{stroke: '#5c4603'}}>
              <div key={title} ref={addToRefs}>
                <h2 className='h21'>{title} </h2>
                <p className='p1'>{subtitle} </p>
              </div>
            </Hexagon>
          )
        })
      }

    <div class="hexagon hexagon1">
      <div class="hexagon-in1">
        <div class="hexagon-in2"></div>
      </div>
    </div>


     </>
  )
}