document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const popupOverlay = document.getElementById('popup-overlay');
  
    // Simulate the scroll up effect
    setTimeout(() => {
      intro.style.transform = "translateY(-100%)"; // Move intro off the screen
      intro.style.transition = "transform 1s ease-in-out";
  
      setTimeout(() => {
        intro.style.display = "none"; // Hide intro completely
        popupOverlay.classList.remove('hidden'); // Show main content
        popupOverlay.style.opacity = "1"; // Fade in effect
      }, 1000); // Wait for the intro to finish scrolling up
    }, 2000); // Wait 2 seconds before scrolling up
  });
  