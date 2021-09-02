/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//declaramos las variables necesarias con sus valores
let suit = ["heart", "diamond", "club", "spade"]; // ♦ ♥ ♠ ♣
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "king", "queen", "jack", "ace"];

window.onload = function() {
  //write your code here

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
  randomSuit === "heart" || randomSuit === "diamond"
    ? (numberSpan.className = "numberCardRed")
    : (numberSpan.className = "numberCardBlack");
  numberSpan.innerHTML = randomNumber; //aquí le pasamos como valor el numero random a la etiqueta span

  //se las agregamos a la etiqueta div.card
  card.appendChild(suitSpanTop);
  card.appendChild(numberSpan);
  card.appendChild(suitSpanBottom);
};

document.getElementById("btn").addEventListener("click", function() {
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
  console.log(icon);
  //obtenemos los elementos y creamos algunos necesarios
  let card = document.querySelector(".card");

  //limpiamos la carta para que luego se le asignen los nuevos valores
  card.innerHTML = "";
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
  randomSuit === "heart" || randomSuit === "diamond"
    ? (numberSpan.className = "numberCardRed")
    : (numberSpan.className = "numberCardBlack");
  numberSpan.innerHTML = randomNumber; //aquí le pasamos como valor el numero random a la etiqueta span

  //se las agregamos a la etiqueta div.card
  card.appendChild(suitSpanTop);
  card.appendChild(numberSpan);
  card.appendChild(suitSpanBottom);
});
