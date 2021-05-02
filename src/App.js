import React, {  useState, useEffect }  from 'react';  // 
import HorizontalScroll from './components/HorizontalScroll';
import FrontSection from './FrontSection';
import ProjectSection from './ProjectSection';
// import BumperSection from './BumperSection';
import styles from './styles/App.module.scss';
import { gsap } from 'gsap';
import { ScrollToPlugin, } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

      let progressBarHandler = () => {
          
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;

          setScroll(scroll);
      }

      window.addEventListener("scroll", progressBarHandler);

      return () => window.removeEventListener("scroll", progressBarHandler);
  });

  // const onAboutMeClick = (e) => {
  //   console.log('aboutme');
  //   gsap.to(window, { duration: 2, scrollTo: '#project' })
  //   e.preventDefault();
  // };

  return (
    <div >

      <div className={styles.Parallax}>
        <section className={styles.horizontalSection}>
          <div className={`bgimg ${styles.sommme}`}></div>

          <div className={styles.headerContainer}>
            <div className={styles.headerline}></div>
            <h1><a href="#front">Kolbrun</a></h1>
            <div className={styles.link}>
              <ul className={styles.links}>
                <li><a href='#bump' >About me</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href='#bump'>Contact</a></li>
              </ul>
            </div>
            <div id="progressBarContainer" className={styles.progressBarContainer}>
                <div id="progressBar" className={styles.progressBar} style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
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
