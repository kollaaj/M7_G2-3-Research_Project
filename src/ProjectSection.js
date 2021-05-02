import React from 'react';//    useRef, , { useEffect, useState } 
import { gsap } from 'gsap';
// import $ from 'jquery';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles/ProjectSection.module.scss';
import Filler from './filler'
import HexagonsStarter from './components/HexagonsStarter';
import HexagonsPotatoes from './components/HexagonsPotatoes';
import HexagonsProud from './components/HexagonsProud';
import HexagonsGroup from './components/HexagonsGroup';

gsap.registerPlugin(ScrollTrigger);

const starters = [ 
  {id: 'starters1', title: 'BRUN', subtitle: 'Restaurant', text: '<a target="_blank" href="http://outstanding-walk.surge.sh/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M1_G1-HTML_CSS-Introduction-Restaurant">Github Link</a> I created a one page website for a restaurant that does not exist (but dibs on the name if I ever go down that road) to exercise my new HTML and CSS skills. The minimum requirements for this assignment were followed to a tee.'},
  {id: 'starters2', title: 'Poster', subtitle: 'Recreation', text: '<a target="_blank" href="http://therapeutic-protest.surge.sh/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M1_G2-HTML_CSS-Layouting-Poster">Github Link</a>This is a re-creation of an existing poster using HTML and CSS to exercise my new found CSS skills on positioning things in "unusual and interesting" ways. I included the original poster for comparison. '},
  {id: 'starters3', title: 'BITA', subtitle: 'FESTIVAL', text: '<a target="_blank" href="http://wistful-poison.surge.sh/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M3_G2-HTML_CSS-Bootstrap-MovieFestival">Github Link</a>I made a semi responsive website about a movie festival using the UI framework Bootstrap with two different (but not so different) pages/layouts.'},
  {id: 'starters4', title: 'BRUN', subtitle: 'Restaurant 2.0', text: '<a target="_blank" href="http://pretty-tight-boots.surge.sh/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M3_G1-HTML_CSS-SASS-Restaurant">Github Link</a>Here I created a one page website for a restaurant that does not exist to exercise/stumble through/test my SASS skills. Full disclosure I reused existing HTML code from a previous project, just to simplify life a little.'},
];

const potatoes = [ 
  {id: 'potatoes1', title: 'Sticky', subtitle: 'Notes', text: '<a target="_blank" href="http://general-sod.surge.sh">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M3_G10-JS-API-sticky-notes">Github Link</a>I made a password-protected note taking app. The website store&lsquo;s sticky notes in the localStorage and then retrieve them in the next visit.<br> Username: monkey<br> password: banana'},
  {id: 'potatoes2', title: 'TicTak', subtitle: 'Toe', text: '<a target="_blank" href="http://outrageous-coat.surge.sh">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M3_G8-JS_DOM_Timing-TicTacToe">Github Link</a> Yes! I made Tic Tac Toe, try it!'},
  {id: 'potatoes3', title: 'Weather', subtitle: 'app', text: '<a target="_blank" href="https://loud-rainbow.surge.sh">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M4_G2-3-JS-API_consumption_Functional_programming-WeatherApp">Github Link</a>A weather app that shows the current climate and forcasts for the following four days in Reykjavík. The API is fetched from Veðurstofa Íslands'},
  {id: 'potatoes4', title: 'Packman', subtitle: 'cursor', text: '<a target="_blank" href="https://eatable-body.surge.sh">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M4_G5-JS-Modules_PackageManagers_Bundlers-Pacman">Github Link</a> In this project I created a JavaScript Module that can be imported and used in any web page to change the cursor to pacman.'},
  {id: 'potatoes5', title: 'Animation', subtitle: 'landing page', text: '<a target="_blank" href="http://tedious-rice.surge.sh">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M4_G1-HTML_CSS-Animating_Transforming-LandingPage">Github Link</a>I made a landing page for a fictional game'},
];
const proud = [ 
  {id: 'proud1', title: 'Library', text: '<a target="_blank" href="https://mod-library.vercel.app/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/M6_G1-Nextjs-Personal_Library/">Github Link</a> I made an application using the React Framework Next.js, connected it to the CMS Strapi and deployed it in the cloud platform Vercel.'},
  {id: 'proud2', title: 'Cinema', subtitle: 'app', text: '<a target="_blank" href="https://github.com/kollaaj/M6_G2-React_Native_CinemaApp">Github Link</a>An app built with React Native and Expo.io that uses the Kvikmyndir.is API to retrieve and display what movies are shown in Icelandic cinemas and when. This app is a tribute to https://hvaderibio.is which is unfortunately not working as of today, March 9th 2021. You need to have an Expo account to view the project.'},
];
const group = [ 
  {id: 'group1', title: 'Zen', subtitle: 'Pot', text: '<a target="_blank" href="https://zenpot.netlify.app/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/Recipe-web-application">Github Link</a>This is a school project that Kristbjörg , Hulda & I worked on together. We made a mobile and tablet version of a recipe app. We used an API from Spoonacular to search for recipes and filter them out by selecting ingredients, max ready time and diets.'},
  {id: 'group2', title: 'Krot', text: '<a target="_blank" href="https://danni1995.github.io/Krot/">Live Site</a> <a target="_blank" href="https://github.com/kollaaj/Krot">Github Link</a>This is the second group project of the year, here we made web based drawing app.'},
  {id: 'group3', title: 'Punktur', text: '<a target="_blank" href="https://punktur.vercel.app/">Live Site</a> <a target="_blank" href="https://github.com/bjorgg/punktur">Github Link</a>Punktur - Story sharing web applicationPunktur is a new medium for Iceland&lsquo;s reading enthusiasts and creative wordsmiths.'},
];


export default function ProjectSection() {


  return (
    <>
    <main className={styles.main} id='project'>

      <div className={styles.starterContainer}>

        <div className={styles.catecories}>
          <h2>Starter</h2>
        </div>

        <div className={styles.catecoriesWrapper}>
          <div className={styles.projectWrapper}>
            {
              starters.map(({id, title, subtitle, text}) => {
                return <HexagonsStarter key={id} title={title} subtitle={subtitle} text={text} />;
                
              })
            }
          </div>
        </div>

      </div>
      <div className={styles.potatoesContainer}>
        <div className={styles.catecories}>
          <h2>Small potatoes</h2>
        </div>
        <div className={styles.catecoriesWrapper}>
          <div className={styles.projectWrapper}>
          {
            potatoes.map(({id, title, subtitle, text}) => {
              return <HexagonsPotatoes key={id} title={title} subtitle={subtitle} text={text} />;
            })
          }
          </div>
        </div>
      </div>
      <div className={styles.proudContainer}>
        <div className={styles.catecories}>
          <h2>Proud of and want to keep developing</h2>
        </div>
        <div className={styles.catecoriesWrapper}>
          <div className={styles.projectWrapper}>
            {
              proud.map(({id, title, subtitle, text}) => {
                return <HexagonsProud key={id} title={title} subtitle={subtitle} text={text} />;
              })
            }
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
      <div className={styles.catecories}>
          <h2>Group projects</h2>
        </div>
        <div className={styles.catecoriesWrapper}>
          <div className={styles.projectWrapper}>
            {
              group.map(({id, title, subtitle, text}) => {
                return <HexagonsGroup key={id} title={title} subtitle={subtitle} text={text} />;
              })
            }
          </div>
        </div>
      </div>

      <Filler />
    
    </main>
    </>
  )
}