/* Typed.js */

var typed = new Typed(".typed", {
    strings: [
        '<span class="saludo">desarrollador</span>',
        '<span class="saludo">programador</span>',
        '<span class="saludo">investigador</span>',
        '<span class="saludo">inventor</span>',
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