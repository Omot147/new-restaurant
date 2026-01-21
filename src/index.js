import "./styles.css";
import { Home } from '/src/home.js';

const myHome = document.getElementById('btn1');
const myAbout = document.getElementById('btn2');
const myServices = document.getElementById('btn3');
const myContact = document.getElementById('btn4');

const container = document.querySelector("#content");
document.addEventListener("DOMContentLoaded", () => {
    document.innerHTML = "";
   
});

myHome.addEventListener('click', () => {
    Home.reset();
    Home.loadHome();
    myHome.style.backgroundColor = "crimson";
    
});

myAbout.addEventListener('click', () => {
    Home.reset();
    Home.loadAbout();
    myAbout.style.backgroundColor = "blue";
    myAbout.style.color = "white";
});

myServices.addEventListener('click', () => {
    Home.reset();
    Home.loadServices();
    myServices.style.backgroundColor = "green";
    myServices.style.color = "white";
});

myContact.addEventListener('click', () => {
    Home.reset();
    Home.loadContact();
    myContact.style.backgroundColor = "orange";
    myContact.style.color = "white";
});
