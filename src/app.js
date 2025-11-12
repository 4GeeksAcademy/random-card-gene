import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const palos = ["♦", "♥", "♠", "♣"];
const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const btn = document.createElement("button");
btn.textContent = "Nueva partida";

const randomValue = arr => arr[Math.floor(Math.random() * arr.length)];
const getColor = (palo) => {
  if (palo === "♥" || palo === "♦") return "red";
  return "black"; // ♠ y ♣
};

const makeColumn = (palo, n, isCenter = false) => {
  const col = document.createElement("div");
  col.classList.add("column");
  if (isCenter) col.classList.add("center-col");
  for (let i = 0; i < n; i++) {
    const symbol = document.createElement("span");
    symbol.textContent = palo;
    col.appendChild(symbol);
  }
  return col;
};

const createCard = () => {
  const palo = randomValue(palos);
  const numero = randomValue(num);
  const color = getColor(palo);

  const card = document.createElement("div");
  card.classList.add("card");

  const cornerTop = document.createElement("div");
  cornerTop.classList.add("corner", "top-left");
  cornerTop.textContent = numero;
  cornerTop.style.color = color;

  const cornerBottom = document.createElement("div");
  cornerBottom.classList.add("corner", "bottom-right");
  cornerBottom.textContent = numero;
  cornerBottom.style.color = color;

  const center = document.createElement("div");
  center.classList.add("center");
  center.style.color = color;

  let count;
  if (numero === "A") count = 1;
  else if (["J", "Q", "K"].includes(numero)) count = 1;
  else count = parseInt(numero);

  if (count === 3) {
    center.appendChild(makeColumn(palo, 3));
  } else if (count === 5) {
    center.appendChild(makeColumn(palo, 2));
    center.appendChild(makeColumn(palo, 1, true));
    center.appendChild(makeColumn(palo, 2));
  } else if (count === 7) {
    center.appendChild(makeColumn(palo, 3));
    center.appendChild(makeColumn(palo, 1, true));
    center.appendChild(makeColumn(palo, 3));
  } else if (count === 9) {
    center.appendChild(makeColumn(palo, 4));
    center.appendChild(makeColumn(palo, 1, true));
    center.appendChild(makeColumn(palo, 4));
  } else if (count % 2 === 0) {
    const half = count / 2;
    center.appendChild(makeColumn(palo, half));
    center.appendChild(makeColumn(palo, half));
  } else {
    center.appendChild(makeColumn(palo, count));
  }

  card.appendChild(cornerTop);
  card.appendChild(cornerBottom);
  card.appendChild(center);

  return card;
};

let leftCard, rightCard;

const render = () => {
  document.querySelectorAll(".hand").forEach(el => el.remove());

  const hand = document.createElement("div");
  hand.classList.add("hand");

  leftCard = createCard();
  hand.appendChild(leftCard);

  rightCard = createCard();
  hand.appendChild(rightCard);
  document.body.insertBefore(hand, btn);


  setTimeout(() => {
    const overlay = createCard();
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.zIndex = "10";
    rightCard.appendChild(overlay);
  }, 1000); 
};

window.onload = function () {
  document.body.appendChild(btn);
  render();

  btn.addEventListener("click", () => {
    render();
  });
}