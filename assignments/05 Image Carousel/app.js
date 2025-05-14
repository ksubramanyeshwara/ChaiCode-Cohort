// DOM references
const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

// Images and captions as objects for clarity
const images = [
  {
    url: "assets/carousel1.jpg",
    caption: "Beautiful Mountain",
  },
  {
    url: "assets/carousel2.jpg",
    caption: "Serene Lake",
  },
  {
    url: "assets/carousel3.jpg",
    caption: "Sunny Beach",
  },
];

let currentIndex = 0;
let autoPlayInterval = null;
let autoPlayActive = false;

// Create slides and indicators
images.forEach((img, idx) => {
  const slide = document.createElement("img");
  slide.src = img.url;
  slide.className = "carousel-slide";
  slide.style.width = "100%";
  slide.style.display = idx === 0 ? "block" : "none";
  carouselTrack.appendChild(slide);

  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.className = "carousel-indicator" + (idx === 0 ? " active" : "");
  indicator.addEventListener("click", () => showSlide(idx));
  carouselNav.appendChild(indicator);
});

function showSlide(index) {
  const slides = carouselTrack.querySelectorAll(".carousel-slide");
  const indicators = carouselNav.querySelectorAll(".carousel-indicator");
  currentIndex = (index + images.length) % images.length;
  slides.forEach((slide, i) => {
    slide.style.display = i === currentIndex ? "block" : "none";
  });
  indicators.forEach((ind, i) => {
    ind.classList.toggle("active", i === currentIndex);
  });
  caption.textContent = images[currentIndex].caption;
}

function toggleAutoPlay() {
  if (autoPlayActive) {
    clearInterval(autoPlayInterval);
    autoPlayButton.textContent = "Start Auto Play";
    timerDisplay.textContent = "";
  } else {
    let countdown = 5;
    timerDisplay.textContent = `Next in: ${countdown}s`;
    autoPlayInterval = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Next in: ${countdown}s`;
      if (countdown === 0) {
        showSlide(currentIndex + 1);
        countdown = 5;
      }
    }, 1000);
    autoPlayButton.textContent = "Stop Auto Play";
  }
  autoPlayActive = !autoPlayActive;
}

function restartAutoPlayTimer() {
  if (autoPlayActive) {
    clearInterval(autoPlayInterval);
    let countdown = 5;
    timerDisplay.textContent = `Next in: ${countdown}s`;
    autoPlayInterval = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Next in: ${countdown}s`;
      if (countdown === 0) {
        showSlide(currentIndex + 1);
        countdown = 5;
      }
    }, 1000);
  }
}

// Navigation events
prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  restartAutoPlayTimer();
});
nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
  restartAutoPlayTimer();
});
autoPlayButton.addEventListener("click", toggleAutoPlay);

// Initial display
showSlide(0);
