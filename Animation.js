// --> This is a Design Js File => Animation

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded

  gsap.to("#Animation", {
    duration: 2,
    x: 0,
    y: 500,
    rotationX: 360,
    rotationY: 360,
    rotationZ: 360,
    scale: 5
  });
});
