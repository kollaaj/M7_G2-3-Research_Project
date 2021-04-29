import React, { useRef, useEffect } from 'react';//    
import { gsap } from 'gsap';
// import $ from 'jquery';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './styles/ProjectSection.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Filler() {

  const sorryRef = useRef()

  useEffect(() => {

    let split = new SplitText([sorryRef.current])
    
    gsap.from(split.chars, {
      opacity: 0,
      duration: 5, 
      scale:4, 
      repeat: -1,  
      ease:"back", 
      stagger: 0.02,
      yoyo: true,
      repeatDelay: 1,
    })
    
  }, [])


  return (
    <div className={styles.fillerContainer} >
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.about} >
        <p>I am...</p>
      </div>

      <div className={styles.dividerContainer} >
        <div className={styles.divider}></div>
      </div>

      <div className={styles.fillViewport} id='bump'ref={sorryRef}>
        <h5 className={styles.SorryText} >Sorry this section is under construction!</h5>
      </div>
    </div> 
  )
}