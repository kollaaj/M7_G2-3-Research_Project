import React, {useEffect} from 'react';  // , { useRef, useState, useEffect } 
import { gsap } from 'gsap';
import { ReactComponent as HexagonL } from './images/HexagonL.svg';
import { ReactComponent as PolygonL } from './images/PolygonL.svg';
import './App.scss';


export default function FrontSection() {
  

  // const headerRef = useRef(null);
  // const revealRefs = useRef([]);
  // revealRefs.current = [];

  
  useEffect(() => {
    
    const tl = gsap.timeline({defaults:{opacity:0, ease:'back'}});
    tl.from('.LandingText', {ease:'linear'})
      .from('h1', {x:80, duration:1})
      .from('h2', {x:-80, duration:1}, '<')
      .from('h3', {y:30}, '-=0.2')
      .from('button', {y:50}, '-=0.4')
      .from('.hero > div', {scale:0, transformOrigin:'50% 50%', stagger:0.5})

  }, [])



  return (
    <header className='header'>
      <div className="LandingText">
        <h1>Portfolio</h1>
        <h2>ish</h2>
        <h3 className='h3'>Something about something that is maybe relevant</h3>
        <button>see what I created</button>
      </div>
      <div className='hero'>
        <div><HexagonL className='hexs'/></div>
        <div><PolygonL className='polys'/></div>
        <div><HexagonL className='hexm'/></div>
        <div><PolygonL className='polym'/></div>
        <div><HexagonL className='hexl'/></div>
        <div><PolygonL className='polyl'/></div>
      </div>
    </header>
  )
}