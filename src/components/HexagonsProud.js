import React, { useState, useRef} from 'react';//    useRef,, useEffect   
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { GSDevTools } from 'gsap/GSDevTools';

import styles from '../styles/ProjectSection.module.scss';

gsap.registerPlugin(SplitText, GSDevTools);

export default function HexagonsProud({ id, title, subtitle, text }) {
  const [toggled, setToggled] = useState(false);
  const testRef = useRef();

  const onClickHandler = () => {
    if (!toggled) {
      const split = new SplitText([testRef.current]);
      gsap.set(testRef.current, { autoAlpha: 1 });
      gsap.from(split.chars, { opacity: 0, rotation: -20, stagger: 0.1, ease: 'bounce' });
      setToggled(true);
    }
  };

  return (
    <div id={id} className={`${styles.hexagonWrapper} ${styles.proud}`} onClick={onClickHandler}>  
      <div className={`${styles.hexagon} ${styles.proud}`}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p id={id} className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={`info ${styles.info} ${styles.proud}`} ref={testRef}>
        <h4 className={styles.pHexagonInfo} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}