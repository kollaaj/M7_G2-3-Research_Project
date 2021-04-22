import React from 'react';  // , { useRef, useState, useEffect } 
import HorizontalScroll from './components/HorizontalScroll';
import FrontSection from './FrontSection';
import ProjectSection from './ProjectSection';
import BumperSection from './BumperSection';

import './App.scss';

export default function App() {
  

  // const headerRef = useRef(null);
  // const revealRefs = useRef([]);
  // revealRefs.current = [];


  return (
    <div >
      
      <div className='Parallax'>
        <section className='horizontalSection'>
          <div className='sommme'></div>

          <HorizontalScroll>
            <div className='pageContainer'>

              <FrontSection />

              <ProjectSection />
               
            </div>
          </HorizontalScroll>

          <BumperSection />
        </section>
      </div>
    </div>
  )
}