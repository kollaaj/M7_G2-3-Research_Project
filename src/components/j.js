/* eslint-disable */

  // y: 100,
  // x: 100,
  // backgroundColor: "red",
  // opacity: 0,
  // autoAlpha: 1,
  // duration: 1,
  // delay: 0.5, 
  // paused: true,
  // repeat: 2,
  // repeatDelay: 1, 
  // repeatRefresh: true, 
  // yoyo: true, 
  // yoyoEase: true, 
  // rotation: 180, 
  // scale: 1,



























gsap.timeline()
  .from("selector", {properties}, "+=1") // start 1 sec after previous tween ends
  .from("selector", {properties}, "-=1") // start 1 second before previous tween ends
  .from("selector", {properties}, "<")   // start when previous tween begins
  .from("selector", {properties}, "<1")  // start 1 second after previous tween begins


  gsap.to("selector", {x:400});


