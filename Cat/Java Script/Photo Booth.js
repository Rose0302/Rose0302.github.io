// Get all the images in the photo booth
    let images = document.querySelectorAll('.photo-booth img');
    
    // Set the starting position for the images
    let currentPosition = 0;
    
    // Function to scroll the images to the right
    function scrollRight() {
      currentPosition++;
      if (currentPosition >= images.length) {
        currentPosition = 0;
      }
      updateImages();
    }
    
    // Function to update the position of the images
    function updateImages() {
      for (let i = 0; i < images.length; i++) {
        images[i].style.left = (i - currentPosition) * 500 + 'px';
      }
    }