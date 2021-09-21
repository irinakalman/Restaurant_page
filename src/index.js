console.log("index");

import { nav } from './nav.js';
import { home } from './home.js';
import { hist } from './hist.js';
import { legend } from './legend.js';
import { contact } from './contact.js';

nav();

// not needed - it's for if we want to know which tab is currently selected
// const availableSelections = ['home', 'history', 'legend', 'contact'];
// let selected = 'home';


// every module resets #myTabContent from nav.js and then appends this module's content.
// e.g. home() will empty the #myTabContent div and then append home module's content.
document.getElementById("home-tab").onclick = function(event) {
    home();
}

document.getElementById("history-tab").onclick = function(event) {
    hist();
}

document.getElementById("legend-tab").onclick = function(event) {
    legend();
}

document.getElementById("contact-tab").onclick = function(event) {
    contact();
}

home();
document.body.style.backgroundImage = "url('/media/img2.jpg'), linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))";
// document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))";
