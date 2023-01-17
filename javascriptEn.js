let typed2 = new Typed("#typed2", {
    strings: [
        '<span class="saludo">developer</span>',
        '<span class="saludo">programmer</span>',
        '<span class="saludo">investigator</span>',
        '<span class="saludo">creator</span>',
        '<span class="saludo">student</span>',
        '<span class="saludo">dreamer</span>'
    ],
    typeSpeed: 80,
    loop: true,
    backDelay: 1000,
    backSpeed: 30,
    showcursor: true
});

let ageEn = document.querySelector(".ageEn");

var yearsEn = moment().diff('1995-07-19', 'years');
console.log("desde aqui edad")
console.log(yearsEn)

ageEn.innerHTML = yearsEn;

 // broma
 fetch("https://v2.jokeapi.dev/joke/Programming?lang=en")
 .then((res) => res.json())
 .then((result) => {
    if(result.type == "single"){
        jocker.innerHTML = result.joke;
    } else if(result.type == "twopart"){
        jocker.innerHTML =
        `
        <p>${result.setup}</p>
        <p>${result.delivery}</p>
        `
    } else {
        jocker.innerHTML = "no hay chiste"
    }
 })
