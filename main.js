const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const link = document.querySelectorAll("nav a");
const titles = document.querySelectorAll(".card .card-title");
const topics = document.querySelectorAll(".section-topic");
const cards = document.querySelectorAll(".js-cards");
const balls = document.querySelectorAll(".ball");
const stars = document.querySelectorAll(".js-star");
const menuBox = document.querySelector(".js-menu-div");
const btn = document.querySelector(".js-toggler");
const span = document.querySelector(".js-span");

const moon = "fa-moon";
const sun = "fa-sun";
const bars = "fa-bars";
const xmark = "fa-xmark";

let isLight = true;
balls.forEach((ball) => {
  ball.addEventListener("click", () => {
    if (isLight) {
      darken();
      toggle(stars[0], moon, sun);
      toggle(stars[1], moon, sun);
      balls[0].style.left = "69%";
      balls[1].style.left = "69%";
      balls[0].style.backgroundColor = "var(--color2)";
      balls[1].style.backgroundColor = "var(--color2)";
      isLight = false;
    } else {
      lighten();
      toggle(stars[0], sun, moon);
      toggle(stars[1], sun, moon);
      balls[0].style.left = "5%";
      balls[1].style.left = "5%";
      balls[0].style.backgroundColor = "white";
      balls[1].style.backgroundColor = "white";
      isLight = true;
    }
  });
});

let isClosed = true;
btn.addEventListener("click", () => {
  if (isClosed) {
    menuBox.style.display = "block";
    toggle(btn, xmark, bars);
    isClosed = false;
  } else {
    menuBox.style.display = "none";
    toggle(btn, bars, xmark);
    isClosed = true;
  }
});

function toggle(star, add, remove) {
  star.classList.remove(remove);
  star.classList.add(add);
}

function darken() {
  header.style.backgroundColor = "var(--color2)";
  footer.style.backgroundColor = "var(--color2)";
  header.style.color = "white";
  footer.style.color = "white";
  link.forEach((a) => (a.style.color = "white"));
  body.style.backgroundColor = "black";
  cards.forEach((card) => (card.style.backgroundColor = "var(--color2)"));
  titles.forEach((p) => (p.style.color = "white"));
  topics.forEach((p) => (p.style.color = "white"));
  menuBox.style.backgroundColor = "var(--color2)";
}

function lighten() {
  body.style.backgroundColor = "white";
  header.style.backgroundColor = "white";
  footer.style.backgroundColor = "white";
  header.style.color = "black";
  footer.style.color = "black";
  link.forEach((a) => (a.style.color = "black"));
  cards.forEach((card) => (card.style.backgroundColor = "white"));
  titles.forEach((p) => (p.style.color = "black"));
  topics.forEach((p) => (p.style.color = "black"));
  menuBox.style.backgroundColor = "white";
}

const anchor = document.querySelectorAll("a");

anchor.forEach((a) => {
  a.addEventListener("click", () => {});
});

const myDate = new Date();

const year = myDate.getFullYear();

span.textContent = year;
