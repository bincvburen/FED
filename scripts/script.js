// JavaScript Document
console.log("hi");

var middernacht = document.querySelector("#middernacht")
var sterrenlicht = document.querySelector("#sterrenlicht")
var rood = document.querySelector("#rood")
var blauw = document.querySelector("#blauw")
var paars = document.querySelector("#paars")
var geel = document.querySelector("#geel")

var frontIP = document.querySelector("#frontIP")

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

});

sterrenlicht.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Sterrenlicht";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-sterrenlicht)');
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-sterrenlicht-donker)');
    frontIP.src = "./images/Sterrenlicht/ip1.jpg";

});

rood.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Rood";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-rood)');
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-rood-donker)');
    frontIP.src = "./images/Rood/ip1.jpg";

});

blauw.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Blauw";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-blauw)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-blauw-donker)');
    frontIP.src = "./images/Blauw/ip1.jpg";
});

paars.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Paars";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-paars)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-paars-donker)');
    frontIP.src = "./images/Paars/ip1.jpg";
});

geel.addEventListener("click", function () {
    document.getElementById("displaykleur").innerHTML   
    = "Geel";   
    document.documentElement.style.setProperty('--h3-kleur', 'var(--ip-geel)'); 
    document.documentElement.style.setProperty('--h3-kleur-donker', 'var(--ip-geel-donker)');
    frontIP.src = "./images/Geel/ip1.jpg";

});



function changeKleur(number) {
    document.documentElement.style.setProperty('--h3-kleur', alleKleuren[number]);
    console.log(alleKleuren[number]);
}








