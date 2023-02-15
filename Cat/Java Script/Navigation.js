const donate = document.getElementById("donate");
const adopt = document.getElementById("adopt");

donate.addEventListener("mouseover", function() {
  donate.style.fontSize = "28px";
});

donate.addEventListener("mouseout", function() {
  donate.style.fontSize = "20px";
});

adopt.addEventListener("mouseover", function() {
  adopt.style.fontSize = "28px";
});

adopt.addEventListener("mouseout", function() {
  adopt.style.fontSize = "20px";
});