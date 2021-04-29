import React, { useRef, useEffect } from 'react';  // , { useState, useEffect } 
import { gsap } from 'gsap';
import styles from './styles/FrontSection.module.scss';


export default function FrontSection() {
  
  
  
  const wrapRef = useRef();
  const textRef = useRef();
  // const revealRefs = useRef([]);
  // revealRefs.current = [];

  
  useEffect(() => {
    
    const tl = gsap.timeline({defaults:{opacity:0, ease:'back'}});

    tl.from([textRef.current], {ease:'linear'})
      .from('h1', {x:120, duration:1 })
      .from('h2', {x:-100, duration:1.3 }, '<')
      .from('h3', {y:60}, '-=0.1')
      .from('.buttonContainer', {y:100, duration:1}, '<')

  }, [])

  


  return (
    <div className={styles.FrontContainer} id='front'>
        <div className={`${styles.dividerContainer} ${styles.firstDividerContainer}`}>
          <div className={styles.divider}></div>
        </div>
       <div className={styles.LandingContainer} > {/**/}
       

        <div className={styles.LandingText} ref={textRef}>
          <h1>Portfolio</h1>
          <h2>ish</h2>
          <h3 className={styles.h3}>Something about something that is maybe relevant</h3>
          <div className={`${styles.buttonContainer} buttonContainer`}>
            <div className={styles.line1}></div>
            <a href="/" className={styles.future}>see what I created</a>
            <div className={styles.line2}></div>
          </div>
        </div>
      </div>

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.heroContainer}> 
        <div className={styles.hero} >
          
               
        </div>
          
      </div>


      <div className={styles.guideContainer}>
        <div className={styles.guide}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> 

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>
    </div>
  ) 
}
