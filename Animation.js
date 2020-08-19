// --> This is a Design Js File => Animation

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded

  gsap.to("#Animation", {
    duration: 2,
    x: -500,
    y: 250,
    rotationX: 360,
    rotationY: 360,
    rotationZ: 360,
    scale: 2.5
  });

  gsap.from("#Instructions", {
    duration: 5,
    y: -400
  });

  // gsap.to("#Instructions", {
  //   duration: 2,
  //   y: 20
  // });
});
