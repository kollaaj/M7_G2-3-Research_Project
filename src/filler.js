import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';    
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

import styles from './styles/ProjectSection.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Filler() {
  const sorryRef = useRef()

  useEffect(() => {
    // when the page loads then start a GSAP SplitText animation that repeats indefinitely
    let split = new SplitText([sorryRef.current]);
    
    gsap.from(split.chars, {
      opacity: 0,
      duration: 5, 
      scale: 4, 
      repeat: -1, // repeat the animation infinitely 
      ease: "back", 
      stagger: 0.02,
      yoyo: true,
      repeatDelay: 1, // 1 second delay between each animation
    });
  }, []);

  return (
    <div id='about-me' className={styles.fillerContainer} >
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
