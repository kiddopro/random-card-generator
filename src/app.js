/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //declaramos las variables necesarias con sus valores
  let suit = ["heart", "diamond", "club", "spade"]; // ♦ ♥ ♠ ♣
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "king", "queen", "jack", "ace"];

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
  let suitSpan = document.createElement("span");
  let numberSpan = document.createElement("span");

  //le asignamos como clase el nombre del tipo de carta (diamond, heart, club, spade)
  suitSpan.className = randomSuit;

  //le pasamos como elemento o texto el ícono que corresponde según el tipo de carta
  suitSpan.innerHTML = icon;

  //según el tipo de carta es el color del número que se muestra en la carta (si es diamante o corazón los colores son en rojo)
  randomSuit === "heart" || randomSuit === "diamond"
    ? (numberSpan.className = "numberCardRed")
    : (numberSpan.className = "numberCardBlack");
  numberSpan.innerHTML = randomNumber; //aquí le pasamos como valor el numero random a la etiqueta span

  //se las agregamos a la etiqueta div.card
  card.appendChild(suitSpan);
  card.appendChild(numberSpan);
};
