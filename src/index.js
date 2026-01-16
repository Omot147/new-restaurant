import "./styles.css";
import { Home } from './home.js';

const myHome = document.getElementById('btn1');
const myAbout = document.getElementById('btn2');
const myService = document.getElementById('btn3');
const myContact = document.getElementById('btn4');

const container = document.querySelector("#content");
document.addEventListener("DOMContentLoaded", () => {
    document.innerHTML = "";
});

myHome.addEventListener('click', () => {
    Home.reset();
    Home.loadHome();
});

myAbout.addEventListener('click', () => {
    Home.reset();
    Home.loadAbout();
});
console.log("Hello, welcome to My Restaurant!");