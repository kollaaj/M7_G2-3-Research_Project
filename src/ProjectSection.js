import React from 'react';  // , { useRef, useState, useEffect } 
import AddScrollTrigger from './components/ScrollTrigger';

import './App.scss';


export default function ProjectSection() {
  

  // const headerRef = useRef(null);
  // const revealRefs = useRef([]);
  // revealRefs.current = [];


  return (
    <>
    <main className='main'>
      <AddScrollTrigger />
      <div className='test'>
        hello
      </div>
    </main>
    </>
  )
}