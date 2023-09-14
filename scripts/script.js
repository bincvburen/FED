// JavaScript Document
console.log("hi");

var middernacht = document.querySelector("#middernacht")
var sterrenlicht = document.querySelector("#sterrenlicht")
var rood = document.querySelector("#rood")
var blauw = document.querySelector("#blauw")
var paars = document.querySelector("#paars")
var geel = document.querySelector("#geel")

var frontIP = document.querySelector("#frontIP")
var ceramic = document.querySelector("#ceramic")
var vijf_g = document.querySelector("#vijf_g")
var personaliseer = document.querySelector("#personaliseer")
var ongeluk = document.querySelector("#ongeluk")

var alleKleuren = [
    "'var(--ip-middernacht)'",
    "'var(--ip-sterrenlicht)'",
    "'var(--ip-rood)'",
    "'var(--ip-blauw)'",
    "'var(--ip-paars)'",
    "'var(--ip-geel)'",
];

var randomKleur = Math.floor(Math.random() * alleKleuren.length);

middernacht.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Middernacht";  
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-middernacht)');
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-middernacht-donker)');
    frontIP.src = "./images/Middernacht/ip1.jpg";
    ceramic.src = "./images/Middernacht/ceramic.jpg";
    vijf_g.src = "./images/Middernacht/5g.jpg";
    personaliseer.src = "./images/Middernacht/personaliseer.jpg";
    ongeluk.src = "./images/Middernacht/ongeluk.jpg";

    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="15% 120%"; 
    }

});

sterrenlicht.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Sterrenlicht";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-sterrenlicht)');
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-sterrenlicht-donker)');
    frontIP.src = "./images/Sterrenlicht/ip1.jpg";
    ceramic.src = "./images/Sterrenlicht/ceramic.jpg";
    vijf_g.src = "./images/Sterrenlicht/5g.jpg";
    personaliseer.src = "./images/Sterrenlicht/personaliseer.jpg";
    ongeluk.src = "./images/Sterrenlicht/ongeluk.jpg";

    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="20% 10%"; 
    }

});

rood.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Rood";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-rood)');
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-rood-donker)');
    frontIP.src = "./images/Rood/ip1.jpg";
    ceramic.src = "./images/Rood/ceramic.jpg";
    vijf_g.src = "./images/Rood/5g.jpg";
    personaliseer.src = "./images/Rood/personaliseer.jpg";
    ongeluk.src = "./images/Rood/ongeluk.jpg";

    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="30% -70%";
    }

});

blauw.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Blauw";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-blauw)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-blauw-donker)');
    frontIP.src = "./images/Blauw/ip1.jpg";
    ceramic.src = "./images/Blauw/ceramic.jpg";
    vijf_g.src = "./images/Blauw/5g.jpg";
    personaliseer.src = "./images/Blauw/personaliseer.jpg";
    ongeluk.src = "./images/Blauw/ongeluk.jpg";

    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="40% -100%"; 
    }
});

paars.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Paars";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-paars)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-paars-donker)');
    frontIP.src = "./images/Paars/ip1.jpg";
    ceramic.src = "./images/Paars/ceramic.jpg";
    vijf_g.src = "./images/Paars/5g.jpg";
    personaliseer.src = "./images/Paars/personaliseer.jpg";
    ongeluk.src = "./images/Paars/ongeluk.jpg";
    
    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="55% -50%";
    }
});

geel.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Geel";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-geel)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-geel-donker)');
    frontIP.src = "./images/Geel/ip1.jpg";
    ceramic.src = "./images/Geel/ceramic.jpg";
    vijf_g.src = "./images/Geel/5g.jpg";
    personaliseer.src = "./images/Geel/personaliseer.jpg";
    ongeluk.src = "./images/Geel/ongeluk.jpg";

    if (window.matchMedia('screen and (max-width:600px)').matches) {
        document.getElementById("achtergrond_ip").style.backgroundPosition="70% 40%"; 
    }

});

// if (window.matchMedia('screen and (min-width:1500px)').matches) {
//     document.getElementById("achtergrond_ip").style.backgroundPosition="0% 0%"; 
//     document.getElementById("achtergrond_ip").style.backgroundSize="100%"; 
// }











