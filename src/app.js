/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//declaramos las variables necesarias con sus valores
let suit = ["heart", "diamond", "club", "spade"]; // ♦ ♥ ♠ ♣
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

const createCard = (width, height) => {
  // //declaramos las variables necesarias con sus valores
  // let suit = ["heart", "diamond", "club", "spade"]; // ♦ ♥ ♠ ♣
  // let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "king", "queen", "jack", "ace"];

  //establecemos los "iconos" según el tipo de carta que caiga
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let icon =
    randomSuit === "heart"
      ? "♥"
      : randomSuit === "diamond"
      ? "♦"
      : randomSuit === "club"
      ? "♣"
      : "♠";
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  //obtenemos los elementos y creamos algunos necesarios
  let card = document.querySelector(".card");
  card.innerHTML = "";
  width != undefined && height != undefined
    ? [(card.style.width = width + "px"), (card.style.height = height + "px")]
    : [(card.style.width = "250px"), (card.style.height = "350px")];
  let suitSpanTop = document.createElement("div");
  let suitSpanBottom = document.createElement("div");
  let numberSpan = document.createElement("div");

  //le asignamos como clase el nombre del tipo de carta (diamond, heart, club, spade)
  suitSpanTop.className = randomSuit + " top";
  suitSpanBottom.className = randomSuit + " bottom";

  //le pasamos como elemento o texto el ícono que corresponde según el tipo de carta
  suitSpanTop.innerHTML = icon;
  suitSpanBottom.innerHTML = icon;

  //según el tipo de carta es el color del número que se muestra en la carta (si es diamante o corazón los colores son en rojo)
  // randomSuit === "heart" || randomSuit === "diamond"
  //   ? (numberSpan.className = "numberCardRed")
  //   : (numberSpan.className = "numberCardBlack");
  numberSpan.className = "numberCardBlack";
  numberSpan.innerHTML = randomNumber; //aquí le pasamos como valor el numero random a la etiqueta span

  //se las agregamos a la etiqueta div.card
  card.appendChild(suitSpanTop);
  card.appendChild(numberSpan);
  card.appendChild(suitSpanBottom);
};

//al cargar la página se carga una carta random
window.onload = function() {
  createCard();
};

//cada 10 segundos se genera una carta random
window.setInterval(function() {
  createCard();
}, 10000);

//al presionar el botón se genera otra carta random
document.getElementById("btn").addEventListener("click", function() {
  createCard();
});

//aquí comienza la creacion de la carta según su width o height
let valorWidth = undefined;
let valorHeigth = undefined;

// document.querySelector("#input-width").addEventListener("input", function() {
//   valorWidth = document.querySelector("#input-width").value;
//   valorWidth = valorWidth === "" ? undefined : valorWidth;
//   createCard(valorWidth, valorHeigth);
//   console.log(valorWidth);
// });
// document.querySelector("#input-height").addEventListener("input", function() {
//   valorHeigth = document.querySelector("#input-height").value;
//   // valorHeigth = valorHeigth === "px" ? undefined : valorHeigth;
//   createCard(valorWidth, valorHeigth);
// });
document
  .getElementById("input-width")
  .addEventListener("change", function(event) {
    valorWidth = document.querySelector("#input-width").value;
    valorWidth = valorWidth === "" ? undefined : valorWidth;
    console.log(valorWidth);
    createCard(valorWidth, valorHeigth);
  });

document
  .getElementById("input-height")
  .addEventListener("change", function(event) {
    valorHeigth = document.querySelector("#input-height").value;
    valorHeigth = valorHeigth === "" ? undefined : valorHeigth;
    console.log(valorHeigth);
    createCard(valorWidth, valorHeigth);
  });
