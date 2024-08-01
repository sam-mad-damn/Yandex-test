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

let sliderCountParticipant = 0,
  sliderWidthParticipant;

let sliderId = setInterval(nextSlideParticipant, 4000);

sliderBtnNextParticipant.addEventListener("click", nextSlideParticipant);
sliderBtnPrevParticipant.addEventListener("click", prevSlideParticipant);
sliderBtnPrevParticipant.addEventListener("click", (e) => {
  clearInterval(sliderId);
});
sliderBtnNextParticipant.addEventListener("click", (e) => {
  clearInterval(sliderId);
});

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

showSlideParticipant();

function nextSlideParticipant() {
  sliderCountParticipant++;
  if (sliderCountParticipant > sliderImages.length) {
    sliderCountParticipant = 0;
  }
  rollSlideParticipant();
  thisSlideParticipant();
}

function prevSlideParticipant() {
  sliderCountParticipant--;
  if (sliderCountParticipant < 0) {
    sliderCountParticipant = sliderImagesParticipant.length - 1;
  }
  rollSlideParticipant();
  thisSlideParticipant();
}

function rollSlideParticipant() {
  sliderlineParticipant.style.transform = `translateX(${
    -sliderCountParticipant * sliderWidthParticipant
  }px)`;
}

function thisSlideParticipant() {
  sliderDotsParticipant.innerHTML = `<div class="slider_participant_count">${
    sliderCountParticipant + 1
  }<span>/${sliderImagesParticipant.length}</span></div>`;
}
