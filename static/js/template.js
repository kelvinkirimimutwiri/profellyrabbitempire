// JS for the slider functionality
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const progress = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');
const slides = slider.querySelectorAll('.slider > div:not(.controls)');
let currentSlide = 0;

// function to update the progress bar
function updateProgress() {
  const percent = ((currentSlide + 1) / slides.length) * 100;
  progressText.innerText = `${Math.round(percent)}%`;
  progress.style.transform = `rotate(${360 - (percent / 100) * 360}deg)`;
  if (percent >= 100) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if (percent <= 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}

// function to show the current slide and update the progress bar
function showSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  updateProgress();
}

// event listener for the previous button
prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  showSlide();
});

// event listener for the next button
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

// show the initial slide
showSlide();
