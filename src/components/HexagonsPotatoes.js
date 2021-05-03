import React, { useState, useRef, useEffect} from 'react';
import { GSDevTools } from 'gsap/GSDevTools';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

import styles from '../styles/ProjectSection.module.scss';

gsap.registerPlugin(SplitText, GSDevTools);

export default function HexagonsPotatoes({ id, title, subtitle, text }) {
  // reference to the text element that the animation will run on
  const textRef = useRef();

  // variable to indicate whether to show the text or not
  const [showText, setShowText] = useState(false);

  // a reference to the animation object
  const [animation, setAnimation] = useState();

  useEffect(() => {
    // create a SplitText variable, a GSAP animation object
    const split = new SplitText([textRef.current]);

    // make it so that the text is hidden by default and that the opacity/visibility
    // can be controlled by the animation
    gsap.set(textRef.current, { autoAlpha: 1 });

    // create an animation timeline that first animates the anchor <a> buttons
    // and then the text
    const tl = gsap.timeline();
    tl
      .from(textRef.current.querySelectorAll('h4 a'), {
        opacity: 0,
        rotation: -600,
        stagger: 0.1,
        ease: 'back',
      })
      .from(split.lines, {
        opacity: 0,
        rotation: -600,
        stagger: 0.1,
        ease: 'back',
      }, "<"); // "<" means that the animation will run at the same time as the previous animation

    // pause the animation so that it doesn't run on page load
    setAnimation(tl.pause());
  }, []);

  // a function that runs when the hexagon is clicked
  const onClickHandler = () => {
    // if the text is not showing then play the animation
    if (!showText) {
      animation.play();
      setShowText(true);
    } else { // else reverse the animation
      animation.reverse();
      setShowText(false);
    }
  };

  return (
    <div id={id} className={`${styles.hexagonWrapper} ${styles.potatoes}`}>  
      <div className={`${styles.hexagon} ${styles.potatoes}`} onClick={onClickHandler}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p id={id} className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={`info ${styles.info} ${styles.potatoes}`}>
        {/* here we dangerously set the contents of the heading with the data that is passed as a property to the component */}
        {/* this is so that we can render the anchor <a> links in the text */}
        <h4 ref={textRef} className={styles.pHexagonInfo} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}
