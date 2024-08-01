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
  } else {
    current++;
  }
  slider();
}
function prev() {
  if (current - 1 == -1) {
    current = images.length - 1;
  } else {
    current--;
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

// Слайдер Этапы 375
const sliderImages = document.querySelectorAll(".slider_img"),
  sliderline = document.querySelector(".slider_line"),
  sliderDots = document.querySelectorAll(".slider_dot"),
  sliderBtnNext = document.querySelector(".slider_bnt_next"),
  sliderBtnPrev = document.querySelector(".slider_bnt_prev");

// Слайдер Участники 375

const sliderImagesParticipant = document.querySelectorAll(
    ".slider_item_participant"
  ),
  sliderlineParticipant = document.querySelector(".slider_participant_line"),
  sliderDotsParticipant = document.querySelector(".slider_participant_wrapper"),
  sliderBtnNextParticipant = document.querySelector(
    ".slider_bnt_next_participant"
  ),
  sliderBtnPrevParticipant = document.querySelector(
    ".slider_bnt_prev_participant"
  );

let sliderCount = 0,
  sliderWidth,
  sliderCountParticipant = 0,
  sliderWidthParticipant;

sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);
sliderBtnPrev.disabled = true;

let sliderId=setInterval(nextSlideParticipant, 4000);

sliderBtnNextParticipant.addEventListener("click", nextSlideParticipant);
sliderBtnPrevParticipant.addEventListener("click", prevSlideParticipant);
sliderBtnPrevParticipant.addEventListener("click", (e) => {
  clearInterval(sliderId);
});
sliderBtnNextParticipant.addEventListener("click", (e) => {
  clearInterval(sliderId);
});

function showSlide() {
  sliderWidth = document.querySelector(".stages_slider").offsetWidth;
  sliderline.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlide();
}

function showSlideParticipant() {
  sliderWidthParticipant = document.querySelector(
    ".slider_participant"
  ).offsetWidth;
  sliderlineParticipant.style.width =
    sliderWidthParticipant * sliderImagesParticipant.length + "px";
  sliderImagesParticipant.forEach(
    (item) => (item.style.width = sliderWidthParticipant + "px")
  );
  rollSlideParticipant();
}
showSlide();
showSlideParticipant();

function nextSlide() {
  sliderCount++;
  sliderBtnPrev.disabled = false;
  if (sliderCount == sliderImages.length - 1) {
    sliderBtnNext.disabled = true;
  } else {
    sliderBtnNext.disabled = false;
  }
  rollSlide();
  thisSlide(sliderCount);
}

function nextSlideParticipant() {
  sliderCountParticipant++;
  if (sliderCountParticipant > sliderImages.length) {
    sliderCountParticipant = 0;
  }
  rollSlideParticipant();
  thisSlideParticipant();
}

function prevSlide() {
  sliderCount--;
  sliderBtnNext.disabled = false;
  if (sliderCount == 0) {
    sliderBtnPrev.disabled = true;
  } else {
    sliderBtnPrev.disabled = false;
  }
  rollSlide();
  thisSlide(sliderCount);
}

function prevSlideParticipant() {
  sliderCountParticipant--;
  if (sliderCountParticipant < 0) {
    sliderCountParticipant = sliderImagesParticipant.length - 1;
  }
  rollSlideParticipant();
  thisSlideParticipant();
}

function rollSlide() {
  sliderline.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
function rollSlideParticipant() {
  sliderlineParticipant.style.transform = `translateX(${
    -sliderCountParticipant * sliderWidthParticipant
  }px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active_dot"));
  sliderDots[index].classList.add("active_dot");
}
function thisSlideParticipant() {
  sliderDotsParticipant.innerHTML = `<div class="slider_participant_count">${
    sliderCountParticipant + 1
  }<span>/${sliderImagesParticipant.length}</span></div>`;
}

