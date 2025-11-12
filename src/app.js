import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const palos = ["♦", "♥", "♠", "♣"]
const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const btn = document.createElement("button");
btn.textContent = "Nueva carta";

const randomValue = arr => arr[Math.floor(Math.random()*arr.length)]
const getColor = (palo) => {
      if (palo === "♥" || palo === "♦") return "red";
      return "black"; // ♠ y ♣
    };

const render = () => {
      document.querySelectorAll(".card").forEach(el => el.remove());

      const palo = randomValue(palos);
      const numero = randomValue(num);
      const color = getColor(palo);

      const card = document.createElement("div");
      card.classList.add("card");

      const cardNum = document.createElement("div");
      cardNum.classList.add("numero");
      cardNum.textContent = numero;
      cardNum.style.color = color;

      const cardPaloTop = document.createElement("div");
      cardPaloTop.classList.add("palo-top");
      cardPaloTop.textContent = palo;
      cardPaloTop.style.color = color;

      const cardPaloBottom = document.createElement("div");
      cardPaloBottom.classList.add("palo-bottom");
      cardPaloBottom.textContent = palo;
      cardPaloBottom.style.color = color;

      card.appendChild(cardPaloTop)
      card.appendChild(cardNum);
      card.appendChild(cardPaloBottom);

      document.body.insertBefore(card, btn);
    };

    

console.log(randomValue(palos));
console.log(randomValue(num));





window.onload = function() {
      
      document.body.appendChild(btn);
      render();
      btn.addEventListener("click", render);
    };