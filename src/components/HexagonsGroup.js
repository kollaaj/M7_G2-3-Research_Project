import React, { useState, useRef} from 'react';//    useRef,, useEffect   
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { GSDevTools } from 'gsap/GSDevTools';

import styles from '../styles/ProjectSection.module.scss';

gsap.registerPlugin(SplitText, GSDevTools);

export default function HexagonsGroup({ id, title, subtitle, text }) {
  const [toggled, setToggled] = useState(false);
  const testRef = useRef();

  const onClickHandler = () => {
    if (!toggled) {
      const split = new SplitText([testRef.current]);
      gsap.set(testRef.current, { autoAlpha: 1 });
      gsap.from(split.words, {y:-50, opacity: 0, rotation: 30, stagger:{each:0.05, from:"center"}, ease: 'bounce' });
      setToggled(true);
    }
  };

  return (
    <div id={id} className={`${styles.hexagonWrapper} ${styles.group}`} onClick={onClickHandler}>  
      <div className={`${styles.hexagon} ${styles.group}`}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p id={id} className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={`info ${styles.info} ${styles.group}`} ref={testRef}>
        <h4 className={styles.pHexagonInfo} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}