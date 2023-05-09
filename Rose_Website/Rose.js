// Background Music
const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

function toggleMute() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    muteButton.textContent = 'Mute';
  } else {
    backgroundMusic.pause();
    muteButton.textContent = 'Unmute';
  }
}

// Flowers
function createFallingFlower() {
  const flower = document.createElement('span');
  flower.innerHTML = '🌸';
  flower.classList.add('falling-flower');

  const screenWidth = window.innerWidth;
  const randomX = Math.floor(Math.random() * screenWidth);

  flower.style.left = `${randomX}px`;

  document.getElementById('flower-container').appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}

setInterval(createFallingFlower, 500);

// Typing TITLE
const titleElement = document.querySelector('.typing-title');

window.addEventListener('DOMContentLoaded', startTypingAnimation);

function startTypingAnimation() {
  titleElement.style.animationPlayState = 'running';
}

// Flipping animation for photo album
const photoAlbum = document.querySelector(".photo-album");
const photoAlbumPages = photoAlbum.querySelectorAll(".photo-album__page");
let currentPage = 0;

function flipPage() {
  photoAlbumPages[currentPage].classList.remove("photo-album__page--visible");
  currentPage = (currentPage + 1) % photoAlbumPages.length;
  photoAlbumPages[currentPage].classList.add("photo-album__page--visible");
}

setInterval(flipPage, 3000);

// Expand description on portfolio projects
const portfolioProjects = document.querySelectorAll(".portfolio__project");

portfolioProjects.forEach((project) => {
  const description = project.querySelector(".portfolio__description");
  const image = project.querySelector(".portfolio__image");

  image.addEventListener("mouseover", () => {
    description.classList.add("portfolio__description--visible");
  });

  image.addEventListener("mouseout", () => {
    description.classList.remove("portfolio__description--visible");
  });
});

// Back to top button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

