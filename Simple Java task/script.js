// Get references to the elements in the HTML
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode');

// Function to update the color box and hex code display
colorPicker.addEventListener('input', function() {
  const selectedColor = colorPicker.value; // Get the selected color
  colorBox.style.backgroundColor = selectedColor; // Update the color box
  colorCode.textContent = selectedColor; // Show the hex code of the color
});
