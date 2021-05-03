import React, {  useEffect, useRef, useState } from 'react';
import { GSDevTools } from 'gsap/GSDevTools';
import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

import styles from '../styles/ProjectSection.module.scss';

gsap.registerPlugin(SplitText, GSDevTools);

/**
 * this component is similar to HexagonsPotatoes which is already commented,
 * please go take a look at that component for further explanations
 */
export default function HexagonsStarter({ id, title, subtitle, text }) {
  const textRef = useRef(null);
  const [showText, setShowText] = useState(false);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    const split = new SplitText([textRef.current]);
    gsap.set(textRef.current, { autoAlpha: 1 });

    const tl = gsap.timeline();
    tl
      .from(textRef.current.querySelectorAll('h4 a'), {
        opacity: 0,
        rotation: -20,
        stagger: 0.1,
        ease: 'bounce',
      })
      .from(split.words, {
        opacity: 0,
        rotation: -20,
        stagger: 0.1,
        ease: 'bounce',
      }, "<");

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
    <div id={id} className={`${styles.hexagonWrapper} ${styles.starter}`}>
      <div className={`${styles.hexagon} ${styles.starter}`} onClick={onClickHandler}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p id={id} className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={`info ${styles.info} ${styles.starter}`}>
        <h4 ref={textRef} className={styles.pHexagonInfo} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}
