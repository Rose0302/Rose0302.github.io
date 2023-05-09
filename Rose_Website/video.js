// Pause videos when clicking outside the posters
document.addEventListener("click", function(event) {
  var posters = document.getElementsByClassName("poster");
  var target = event.target;
  var isPoster = false;
  for (var i = 0; i < posters.length; i++) {
    if (posters[i].contains(target)) {
      isPoster = true;
      break;
    }
  }
  if (!isPoster) {
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  }
});
