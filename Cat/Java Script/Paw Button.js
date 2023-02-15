// Add a click event to the button to smoothly scroll back to the top
const backToTopButton = document.querySelector(".paw-shape");
backToTopButton.addEventListener("click", function(event) {
  event.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

