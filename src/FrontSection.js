import { MorphSVGPlugin, } from 'gsap/MorphSVGPlugin';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './styles/FrontSection.module.scss';

gsap.registerPlugin(MorphSVGPlugin);

export default function FrontSection() {
  const textRef = useRef();

  useEffect(() => {
    // a GSAP timeline that animates initial view's text
    gsap.timeline({ defaults: { opacity: 0, ease: 'back' }})
      .from('h1', { x: 120, duration: 1 })
      .from('h2', { x: -100, duration: 1.3 }, '<')
      .from('h3', { y: 60, stagger: 0.3}, '-=0.1')
      .from('.buttonContainer', { y: 100, duration: 1 }, '<');

    // a GSAP timeline that morphs three SVG paths to different shapes indefinitely
    gsap.timeline({ repeat: -1, defaults: { duration: 1 }})
      .to('#hexx', { morphSVG: '#bat' }, '+=1')
      .to('#hexx', { morphSVG: '#uni' }, '+=1')
      .to('#hexx', { morphSVG: '#hexx' }, '+=1');
  }, []);

  return (
    <div className={styles.FrontContainer} id='front'>
      <div className={`${styles.dividerContainer} ${styles.firstDividerContainer}`}>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.LandingContainer}>
        <div className={styles.LandingText} ref={textRef}>
          <h1>Portfolio</h1>
          <h2>ish</h2>

          {/* three separate h3 elements so we can stagger the animation per line */}
          <h3 className={styles.h3}>Something about</h3>
          <h3 className={styles.h3}>something that is</h3>
          <h3 className={styles.h3}>maybe relevant</h3>

          <div className={`${styles.buttonContainer} buttonContainer`}>
            <div className={styles.line1} />
            <a href='/' className={styles.future}>click to see that again</a>
            <div className={styles.line2} />
          </div>
        </div>
      </div>

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.heroContainer}> 
        <div className={styles.hero} >
        <svg id='shape' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1244 1062'>
          <path id='bat' className={styles.bat} fill='white' stroke='none' d='M1243 1L891.5 127L802.852 297.903C792.663 317.547 779.9 335.744 764.902 352.016L744.048 374.639C728.212 391.818 699.542 383.19 695.818 360.124L690.809 329.094C688.274 313.39 687 297.508 687 281.601V187L675.807 211.899C667.014 231.458 654.621 249.189 639.273 264.167L623.17 279.882C621.975 281.048 620.059 281.014 618.906 279.807L598.972 258.936C585.425 244.751 574.419 228.341 566.437 210.424L556 187V274.256C556 295.04 554.054 315.778 550.188 336.199L544.507 366.208C541.1 384.203 518.96 391.068 505.97 378.158C472.177 344.572 443.556 306.156 421.043 264.167L347.5 127L1 1L117.937 132.198C175.535 196.82 214.252 276.037 229.854 361.184L235.5 392L273.512 399.716C357.675 416.8 434.278 460.068 492.358 523.33L516.498 549.624C530.47 564.842 543.013 581.313 553.968 598.829L621 706L686.571 601.788C698.825 582.314 713.041 564.146 728.996 547.568L759.057 516.334C815.706 457.476 888.755 417.027 968.703 400.247L1008 392L1011.4 370.55C1025.82 279.512 1066.58 194.688 1128.64 126.546L1243 1Z' />
          <path id='hexx' className={styles.hexx}  fill='white' d='M510.13 0H172.13L0 298.438L167.435 598.438L505.435 600L676 301.562L510.13 0Z' />
          <path id='uni' className={styles.uni}  fill='white' fillRule='evenodd' d='M206.5 313.151l-17-34.5-7-16v-8.5l4-7 10.5-60.5-2-14-3-10.5-5.5-17.5v-12.7c0-5.142 1.072-10.229 3.148-14.934l3.28-7.434c.641-1.455.289-3.156-.877-4.235a48.4032 48.4032 0 00-27.183-12.5504L151 91.1523l-68.5-23L19 41.6511l137.5 14c12.667 1.1667 38.5 2.8 40.5 0s7.167-7.1667 9.5-9c12.667-6.5 38.8-20 42-22 2.063-1.2893 8.184-3.3936 14.005-5.3947 5.466-1.8792 10.668-3.6674 11.995-4.6041C283 8.6532 325.5-1.3476 336 .1511c19.6 0 49.667 7.5002 63.5 11.0003 9.5 4 25.6 13.5 28 15.5 1.403 1.1695 7.776 8.8928 14.36 16.8715.832 1.0079 1.667 2.0199 2.495 3.0233 6.667 8.0711 14.638 15.0201 24.193 19.2965 18.263 8.173 40.952 15.2891 40.952 15.2891l-7.085 2.6656a46.0026 46.0026 0 01-18.429 2.8921l-11.486-.5577 16.89 16.5592a87.0094 87.0094 0 0016.796 12.864L531 130.151l-13.236.883a45.0044 45.0044 0 01-18.016-2.482l-15.248-5.401s20 32 64 53l-17.18 1.909c-6.481.72-13.041.14-19.296-1.708l-12.524-3.701 8.36 13.377a72.998 72.998 0 0031.623 27.733l14.017 6.39-11.531 4.485a37.0113 37.0113 0 01-13.41 2.515H515l11.302 12.957a57.0122 57.0122 0 0022.232 15.63l27.966 10.913-5.456 4.053c-7.554 5.612-17.361 7.209-26.305 4.285L533 271.151l20.5 45.5 28.261 48.132c2.472 4.21 5.703 7.939 9.515 10.989 6.115 4.892 12.838 9.004 19.98 12.215l31.352 14.094a121.9717 121.9717 0 0025.706 8.278L714 419.651l8.855 1.898a106.9971 106.9971 0 0146.581 22.845L797 467.651l35 37.5 6.507 9.063a51.9927 51.9927 0 0018.985 16.183l5.508 2.754 21.402 11.705a47.0026 47.0026 0 0117.088 15.982l7.347 11.532c16.48 25.868 22.43 57.063 16.627 87.18L924 667.151l-9.709 41.668a63.9998 63.9998 0 01-7.498 18.482l-16.453 27.334a73.0028 73.0028 0 00-10.345 33.599l-.495 8.917v19.156c0 4.555.384 9.101 1.148 13.592l5.818 34.175c.687 4.038.913 8.142.672 12.232l-.638 10.845c0 9.259 1.66 18.442 4.9 27.115l8.011 21.442a81.9916 81.9916 0 0011.071 20.309L924 974.151l11.87 12.101a68.0175 68.0175 0 0013.642 10.74l14.332 8.568c1.767 1.06 3.631 1.94 5.567 2.64l27.589 9.95h-10.527c-3.636 0-7.259-.43-10.793-1.28l-9.18-2.22 7 5.5 12.5 7.5-14.103-.78c-2.587-.15-5.145-.62-7.609-1.42l-16.288-5.3 3.014 3.02c3.957 3.95 8.604 7.15 13.711 9.44l6.775 3.04h-8.164c-4.158 0-8.251-1.04-11.907-3.02l-6.429-3.48 1.986 1.99c3.634 3.63 8.004 6.44 12.815 8.25l4.699 1.76-8.009-.36c-9.129-.42-17.939-3.48-25.352-8.83L921 1024.65l3.23 4.85c3.149 4.72 7.202 8.77 11.926 11.92l6.344 4.23-13.215-1.02c-12.66-.97-24.883-5.06-35.58-11.9l-14.991-9.59c-7.748-4.95-14.559-11.24-20.118-18.57l-11.388-15.009a42.8823 42.8823 0 01-3.893-6.15l-2.915-5.605a32.03 32.03 0 01-2.813-7.671l-1.239-5.453a10.2477 10.2477 0 00-1.139-2.887 29.8717 29.8717 0 01-3.63-9.941l-.874-5.022c-.136-.785-.358-1.553-.66-2.29l-13.037-31.776a83.0078 83.0078 0 01-4.017-12.549l-6.378-27.19a80.0158 80.0158 0 01-1.996-13.928l-2.117-38.948 3.5-62.5 3.31-20.335a163.9813 163.9813 0 0113.463-43.444l30.81-65.512c4.593-9.768 7.953-20.07 10-30.668l2.895-14.987c1.606-8.312-.378-16.921-5.458-23.694-3.443-4.59-8.971-7.137-14.697-6.768l-2.462.159c-2.153.139-3.808 1.96-3.74 4.117l.378 12.095a89.0155 89.0155 0 01-4.63 31.24l-4.363 12.927a106.9715 106.9715 0 01-10.646 22.494l-9.342 14.947a51.9968 51.9968 0 01-9.705 11.444l-35.977 31.722a67.0594 67.0594 0 01-10.396 7.527l-16.712 9.809c-.42.247-.601.761-.429 1.217l5.694 15.009a116.0074 116.0074 0 0013.035 24.816l15.472 22.385 16.949 29.66a16.0013 16.0013 0 011.74 11.349l-2.473 11.333a143.1196 143.1196 0 00-2.94 20.53L782 901.151l-4.301 32.255a72.8522 72.8522 0 01-2.148 10.335l-14.364 50.469c-1.59 5.587-6.694 9.44-12.503 9.44h-10.9c-2.71 0-5.276 1.22-6.985 3.33l-.94 1.15c-1.831 2.26-2.697 5.14-2.408 8.03l.267 2.67c.693 6.93-4.64 12.99-11.601 13.19l-30.878.87c-6.138.17-12.276-.37-18.289-1.62l-17.45-3.62 1.83-4.68a40.981 40.981 0 017.537-12.29l3.133-3.53 16.014-25.164a24.998 24.998 0 0113.878-10.514l24.671-7.436a6.9982 6.9982 0 004.277-3.644l3.912-8.053a46.0008 46.0008 0 004.224-14.058l6.759-51.027a174.9979 174.9979 0 001.147-34.318l-.976-15.037a24.003 24.003 0 00-3.812-11.501L706 786.151l-.5 28 4.682 43.075a8.0015 8.0015 0 01-1.335 5.359L674.5 913.151l-16.5 33.5-10 15.5-27.31 35.816c-2.112 2.773-3.741 5.873-4.821 9.183l-2.418 7.42c-1.986 6.09-8.115 9.83-14.44 8.8l-3.375-.55a9.978 9.978 0 00-7.515 1.81l-.776.57c-1.842 1.35-2.226 3.94-.856 5.77.32.43.413.98.248 1.49l-4.975 15.31a8.989 8.989 0 01-5.014 5.49l-2.676 1.15c-16.314 6.99-34.392 8.76-51.753 5.07L509 1056.65l10.014-30.04c2.613-7.84 7.206-14.87 13.333-20.42l6.274-5.67a35.2911 35.2911 0 0112.241-7.221 32.116 32.116 0 0016.676-13.135l9.118-14.329a32.0027 32.0027 0 015.59-6.605l6.754-6.079 15.097-18.018c.268-.321.507-.664.714-1.027l36.981-64.831a38.0625 38.0625 0 004.375-11.992c6.947-37.921-1.152-77.058-22.579-109.107l-22.113-33.075a46.9913 46.9913 0 01-4.873-9.454l-11.256-29.674a48.0043 48.0043 0 01-3.104-18.254l1.155-45.061c.057-2.211-1.693-4.049-3.904-4.101L541 607.651l-31-2-35.621-2.468a106.0116 106.0116 0 01-28.896-6.129l-18.983-6.903-28.5-13.5-20.492-12.942a122.9839 122.9839 0 01-15.147-11.281l-25.317-22.071a38.552 38.552 0 00-14.902-8.056l-1.856-.522a11.2297 11.2297 0 00-10.35 2.284c-10.359 8.88-24.265 12.425-37.611 9.589l-27.653-5.877a139.0063 139.0063 0 00-62.116.993l-32.332 7.959c-1.098.27-2.03.992-2.566 1.988l-4.946 9.185a4.0016 4.0016 0 00.322 4.297l8.567 11.422a26.0282 26.0282 0 013.135 5.446l4.423 10.426c.89 2.096 1.476 4.308 1.742 6.569l.74 6.288c.568 4.83.272 9.723-.874 14.45l-2.267 9.353-8.686-3.362a53.9878 53.9878 0 01-12.682-6.991l-6.313-4.684a40.0522 40.0522 0 00-7.071-4.195l-7.328-3.381a3.9979 3.9979 0 00-3.734.202l-10.554 6.332a22.988 22.988 0 00-4.758 3.794l-6.812 7.096a22.9961 22.9961 0 00-4.7231 7.287l-4.9212 12.139a24.0227 24.0227 0 01-2.2726 4.296l-6.7246 10.087c-1.6002 2.4-4.8651 3.008-7.2218 1.344-2.4869-1.755-5.8349-1.655-8.2118.247l-.8598.688A6.9985 6.9985 0 0053 652.516v4.635l-1.2216 1.727a74.9987 74.9987 0 01-34.7971 26.878L0 692.151l.9606-64.839a6.0011 6.0011 0 012.0386-4.418L17.5 610.151l17-19 48.0152-41.959a20.9999 20.9999 0 007.1711-16.476L88.5 495.151l1.4288-81.916a17.9983 17.9983 0 011.8976-7.736l2.5012-5.003c4.524-9.048 12.9824-15.491 22.9064-17.45a69.3398 69.3398 0 0142.821 5.227l26.445 12.378 12.068 6.476a74.0144 74.0144 0 0115.436 11.045l1.954 1.819a29.999 29.999 0 0012.869 7.072l4.173 1.088-2.445-11a15.018 15.018 0 01-.25-5.042l1.195-9.958v-11.222c0-9.019 2.426-17.872 7.024-25.63l.186-.314c.525-.887.954-1.827 1.28-2.804a71.0532 71.0532 0 0110.064-19.487l5.271-7.203a47.7938 47.7938 0 017.234-7.866c15.964-13.871 21.856-36.074 14.87-56.035l-1.263-3.608a6.2848 6.2848 0 00-4.616-4.07l-1.431-.307c-5.119-1.097-10.205 1.99-11.595 7.038l-7.024 25.508-30 17h-15zm-31 155l-29-18v29.5l29-11.5z'/>
			  </svg>   
        </div> 
      </div>

      {/* arrows >> that indicate that the user can scroll to the right */}
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

// eslint-disable-next-line
{/* <g transform='translate(offset_x,offset_y)'></g> */}
