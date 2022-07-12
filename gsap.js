let element = document.querySelectorAll(".skill-icon");
        console.log(element)

gsap.from(element, {
    duration: 6,
    scale: .2, 
    x: -50,
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.4,
    ease: "elastic", 
    force3D: true
});