document.querySelectorAll(".menu .ul_links .il_links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu_p").checked = false;
  });
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("cambiar-estilo");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  document.querySelector("header").style.backgroundColor = hexColor;
  document.querySelector("main").style.backgroundColor = hexColor;
  document.querySelector("link").style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
