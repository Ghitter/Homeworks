const parallax_el = document.querySelectorAll(".parallax");


let xvalue = 0;
let yvalue = 0;
let rotateDegree = 0;

window.addEventListener("mousemove", (e) => {
  xvalue = e.clientX - window.innerWidth / 2;
  yvalue = e.clientY - window.innerHeight / 2;
  rotateDegree = (xvalue / (window.innerWidth / 2)) * 20;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let isinleft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zvalue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isinleft;

    el.style.transform = `
      perspective(2300px)
      translateX(calc(-50% + ${-xvalue * speedx}px))
      translateY(calc(-50% + ${-yvalue * speedy}px))
      translateZ(${zvalue * 0.2}px)
      rotateY(${rotateDegree}deg)
    `;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  let timeline = gsap.timeline();

  parallax_el.forEach(el => {
    const direction = el.style.bottom.includes('-') ? 1 : -1;
    const top = direction === 1 ? window.innerHeight : -el.offsetHeight;
    timeline.from(
      el,
      {
        top: `${top}px`,
        duration: 1,
      }, "1"
    );
  });
});
  
