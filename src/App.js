import React, {  useState, useEffect }  from 'react';
import { ScrollToPlugin, } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

import HorizontalScroll from './components/HorizontalScroll';
import ProjectSection from './ProjectSection';
import FrontSection from './FrontSection';

import styles from './styles/App.module.scss';

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  // scroll is a state variable that stores how far down the user has scrolled, e.g. 0.25 (25%)
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // function that is run on each scroll event of the window
    const progressBarHandler = () => {
      // calculate how far down the user has scrolled
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    // attach handler to scroll event
    window.addEventListener('scroll', progressBarHandler);

    // clean up function that removes the scroll event listener
    return () => window.removeEventListener('scroll', progressBarHandler);
  });

  return (
    <div>
      <div className={styles.Parallax}>
        <section className={styles.horizontalSection}>
          <div className={`bgimg ${styles.sommme}`}></div>

          <div className={styles.headerContainer}>
            <div className={styles.headerline}></div>
            <h1><a href='#front'>Kolbrun</a></h1>
            <div className={styles.link}>
              <ul className={styles.links}>
                <li>
                  <a href='#bump' className={styles.aboutLink}>About me</a>
                  <span>Test</span>
                </li>
                <li>
                  <a href='#project' className={styles.projectLink}>Projects</a>
                  <span>Test</span>
                </li>
                <li>
                  <a href='#bump' className={styles.contackLink}>Contact</a>
                  <span>Test</span>
                </li>
              </ul>
            </div>
            <div id='progressBarContainer' className={styles.progressBarContainer}>
              <div id='progressBar' className={styles.progressBar} style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
          </div>

          <HorizontalScroll>
            <div className={styles.pageContainer}>
              <FrontSection/>
              <ProjectSection/>
            </div>
          </HorizontalScroll>
        </section>
      </div>
    </div>
  )
}
