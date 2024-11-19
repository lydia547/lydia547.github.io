document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const choices = document.querySelectorAll('.choice');
  
    // Show the popup on page load
    popupOverlay.style.display = 'flex';
  
    // Add event listeners to hide the popup when a choice is clicked
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
      });
    });
  });
  
  