/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suit = ["heart", "diamond", "club", "spade"]; // ♦ ♥ ♠ ♣
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "king", "queen", "jack", "ace"];

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

  let card = document.querySelector(".card");
  let suitIcon = document.createElement("i");
  suitIcon.className = randomSuit; //randomSuit
  suitIcon.innerHTML = icon;
  card.appendChild(suitIcon);
};
