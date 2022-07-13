/* Typed.js */

var typed = new Typed(".typed", {
    strings: [
        '<span class="saludo">desarrollador</span>',
        '<span class="saludo">programador</span>',
        '<span class="saludo">investigador</span>',
        '<span class="saludo">transformador</span>',
        '<span class="saludo">estudiante</span>'
    ],
    typeSpeed: 80,
    loop: true,
    backDelay: 1000,
    backSpeed: 30,
    showcursor: true
});

/* Otros scripts */

const imagen1 = document.querySelector('.title-first');
const imagen2 = document.querySelector('.txt-1');
const prueba2 = document.querySelector(".prueba2");


/* window.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        imagen1.classList.add("visible")
    }
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        imagen2.classList.add("visible")
    }
}) */

function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        console.log('Elemento visible');
        observer.unobserve(entry.target);
        entry.target.classList.add("visible");
    }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

const observer = new IntersectionObserver(callback, options);

observer.observe(imagen1);
observer.observe(imagen2);
observer.observe(prueba2);

/* iconos */
// esto hay que mejorarlo muchísimo con un forEach

const items = document.querySelector(".icons");
const items2 = document.querySelector(".icons2");
const items3 = document.querySelector(".icons3");
const items4 = document.querySelector(".icons4");
const items5 = document.querySelector(".icons5");
const items6 = document.querySelector(".icons6");
const items7 = document.querySelector(".icons7");
const items8 = document.querySelector(".icons8");
const itemsCont = document.querySelector(".skill-icon");

function callback2(entries,observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        icons();
    }
    });
}

const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

const observador = new IntersectionObserver(callback2,options2);

function icons () {
    gsap.from(".skill-icon", {
        duration: 6,
        scale: 0, 
        x: -50,
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.4,
        ease: "elastic", 
        force3D: true
    });

    items.classList.add("visible");
    items2.classList.add("visible");
    items3.classList.add("visible");
    items4.classList.add("visible");
    items5.classList.add("visible");
    items6.classList.add("visible");
    items7.classList.add("visible");
    items8.classList.add("visible");
}

observador.observe(items);