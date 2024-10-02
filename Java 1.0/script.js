// Get references to the elements in the HTML
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode');

let currentSize = 200; // Initial size of the color box

// Function to update the color box and hex code display
colorPicker.addEventListener('input', function() {
  const selectedColor = colorPicker.value; // Get the selected color
  colorBox.style.backgroundColor = selectedColor; // Update the color box
  colorCode.textContent = selectedColor; // Show the hex code of the color

  // Increase the size of the color box
  currentSize += 50; // Increment size by 50px each time a color is selected
  colorBox.style.width = currentSize + 'px';
  colorBox.style.height = currentSize + 'px';

  // If the color box size reaches or exceeds the viewport size, make it full screen
  if (currentSize >= window.innerWidth || currentSize >= window.innerHeight) {
    colorBox.style.width = '100vw'; // Full width of the viewport
    colorBox.style.height = '100vh'; // Full height of the viewport
    colorBox.style.position = 'fixed'; // Fix it in place
    colorBox.style.top = '0';
    colorBox.style.left = '0';
    colorBox.style.margin = '0'; // Remove any margin
  }
});



