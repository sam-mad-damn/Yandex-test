// Слайдер Этапы 375

const sliderImages = document.querySelectorAll(".slider_img"),
  sliderline = document.querySelector(".slider_line"),
  sliderDots = document.querySelectorAll(".slider_dot"),
  sliderBtnNext = document.querySelector(".slider_bnt_next"),
  sliderBtnPrev = document.querySelector(".slider_bnt_prev");

let sliderCount = 0,
  sliderWidth;

sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);
sliderBtnPrev.disabled = true;

function showSlide() {
  sliderWidth = document.querySelector(".stages_slider").offsetWidth;
  sliderline.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlide();
}
showSlide();

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

function rollSlide() {
  sliderline.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active_dot"));
  sliderDots[index].classList.add("active_dot");
}
