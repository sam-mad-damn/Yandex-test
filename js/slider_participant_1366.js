// Слайдер на 1366 Участники турнира
let images = document.querySelectorAll(".slider_block");
let current = 0;
let count = 3;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("opacity0");
  }
  images[current].classList.remove("opacity0");
}

function next() {
  if (current + 1 == images.length) {
    current = 0;
    document.querySelector(".count").innerHTML = `${count}<span>/${
      images.length * 3
    }</span></div>`;
  } else {
    current++;
    document.querySelector(".count").innerHTML = `${current * 6}<span>/${
      images.length * 3
    }</span></div>`;
  }
  slider();
}

function prev() {
  if (current - 1 == -1) {
    current = images.length - 1;
  } else {
    current--;
    document.querySelector(".count").innerHTML = `${count}<span>/${
      images.length * 3
    }</span></div>`;
  }
  slider();
}

let timerId = setInterval(next, 4000);
slider();
document.querySelector(".prev").addEventListener("click", (e) => {
  clearInterval(timerId);
});
document.querySelector(".next").addEventListener("click", (e) => {
  clearInterval(timerId);
});
document.querySelector(".prev").onclick = prev;
document.querySelector(".next").onclick = next;
