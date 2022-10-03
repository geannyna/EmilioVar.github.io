/* Otros scripts */

const titleFirst = document.querySelector('.title-first');
const basicData = document.querySelector('.txt-1');
const titleSecond = document.querySelector(".title-second");
const Footer = document.querySelector(".Footer");
const Footer1 = document.querySelector(".Footer-1");
const Footer2 = document.querySelector(".Footer-2");
const certificates = document.querySelector(".sectionCertificates");
const btnCurriculum = document.querySelector("#btn-curriculum");


/* window.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        titleFirst.classList.add("visible")
    }
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        basicData.classList.add("visible")
    }
}) */

function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        console.log('Elemento visible');
        observer.unobserve(entry.target);
        entry.target.classList.add("visible");
        entry.target.style.transform = "translateY(-20px)";
    }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

observer.observe(titleFirst);
observer.observe(basicData);
observer.observe(titleSecond);
observer.observe(Footer);
observer.observe(Footer1);
observer.observe(Footer2);
observer.observe(certificates);
observer.observe(btnCurriculum);

/* iconos */
// esto hay que mejorarlo muchísimo con un forEach

const items = document.querySelector(".icons");
const itemsCont = document.querySelector(".skill-icon");
const itemsItered = document.querySelectorAll(".skill-icon");

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
    threshold: 0.5
};

const observador = new IntersectionObserver(callback2,options2);

function icons () {
    gsap.from(".skill-icon", {
        duration: 4,
        scale: 0, 
        x: -50,
        opacity: 0, 
        delay: 0.4, 
        stagger: 0.4,
        ease: "elastic", 
        force3D: true
    });

    itemsItered.forEach(e => {
        e.classList.add("visible");
        console.log(`aplicado al elemento ${e}`)
    })
}

observador.observe(items);

let iconos = document.querySelectorAll(".icon");

/* Language selector */
let lang = document.querySelector("#language-cont");
let langSel = document.querySelector("#languageSel"); 

    lang.addEventListener("mouseover", e => {
        langSel.classList.add("visible");
    });
    lang.addEventListener("mouseout", e => {
        langSel.classList.remove("visible");
    });

/* window.addEventListener("scroll", e => {
    if(window.scrollY >= 100) {
        console.log("haciendo scroll")
        lang.style.opacity = "0 !important";
    } else {
        lang.style.opacity = "1 !important";
    }
}) */

window.onscroll = function() {
    if(window.scrollY >= 300) {
        lang.style.opacity = "0";
    } else {
        lang.style.opacity = "1";
    }
};

/* Typed.js */
let typed = new Typed("#typed", {
    strings: [
        '<span class="saludo">desarrollador</span>',
        '<span class="saludo">programador</span>',
        '<span class="saludo">investigador</span>',
        '<span class="saludo">creador</span>',
        '<span class="saludo">estudiante</span>',
        '<span class="saludo">soñador</span>'
    ],
    typeSpeed: 80,
    loop: true,
    backDelay: 1000,
    backSpeed: 30,
    showcursor: true
});

/* moments.js */

let age = document.querySelector(".age");

var years = moment().diff('1995-07-19', 'years');
console.log("desde aqui edad")
console.log(years)

age.innerHTML = years;
