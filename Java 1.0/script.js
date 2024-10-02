// Get references to the elements in the HTML
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('color-box');
const yayText = document.getElementById('yayText');

// Initialize the size of the balloon
let balloonSize = 200; // Starting size (200px)

// Function to update the balloon size and color
colorPicker.addEventListener('input', function() {
  const selectedColor = colorPicker.value; // Get the selected color
  colorBox.style.backgroundColor = selectedColor; // Update the balloon color

  // Increase the size of the balloon, but stop at 800px
  if (balloonSize < 800) {
    balloonSize += 50; // Increase the size by 50px each time
  }

  colorBox.style.width = `${balloonSize}px`; // Set the new width
  colorBox.style.height = `${balloonSize}px`; // Set the new height

  // Trigger the "Yay!" text animation when the balloon reaches 800px
  if (balloonSize >= 800) {
    yayText.classList.add('slide-up'); // Add the slide-up class for animation
  }
});




