
var colorPicker = document.getElementById('colorPicker');
var colorBox = document.getElementById('color-box');
var yayText = document.getElementById('yayText');

var balloonSize = 200; 

colorPicker.oninput = function() {
  var selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor; 

  if (balloonSize < 800) {
    balloonSize += 50;
  }

  colorBox.style.width = balloonSize + 'px'; 
  colorBox.style.height = balloonSize + 'px'; 

  if (balloonSize >= 800) {
    yayText.className += ' slide-up'; 
  }
};






