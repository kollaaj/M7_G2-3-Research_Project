import React, { useEffect, useState, useRef } from 'react';
import { GSDevTools } from 'gsap/GSDevTools';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

import styles from '../styles/ProjectSection.module.scss';

gsap.registerPlugin(SplitText, GSDevTools);

/**
 * this component is similar to HexagonsPotatoes which is already commented,
 * please go take a look at that component for further explanations
 */
export default function HexagonsGroup({ id, title, subtitle, text }) {
  const textRef = useRef();
  const [showText, setShowText] = useState(false);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    const split = new SplitText([textRef.current]);
    gsap.set(textRef.current, { autoAlpha: 1 });

    const tl = gsap.timeline();
    tl
      .from(split.words, {
        y: -50,
        opacity: 0,
        rotation: 30,
        stagger: {
          each:0.05,
          from:"center",
        },
        ease: 'bounce',
      })
      .from(textRef.current.querySelectorAll('h4 a'), {
        y: -50,
        opacity: 0,
        rotation: 30,
        stagger: {
          each: 0.05,
          from: "center",
        },
        ease: 'bounce',
      }, "-=0.8");

    setAnimation(tl.pause());
  }, []);

  const onClickHandler = () => {
    if (!showText) {
      animation.play();
      setShowText(true);
    } else {
      animation.reverse();
      setShowText(false);
    }
  };

  return (
    <div id={id} className={`${styles.hexagonWrapper} ${styles.group}`}>  
      <div className={`${styles.hexagon} ${styles.group}`} onClick={onClickHandler}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p id={id} className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={`info ${styles.info} ${styles.group}`}>
        <h4 ref={textRef} className={styles.pHexagonInfo} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}
