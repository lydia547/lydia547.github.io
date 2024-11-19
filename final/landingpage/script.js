document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const popupOverlay = document.getElementById('popup-overlay');
  
    // Simulate the scroll-up effect
    setTimeout(() => {
      intro.style.transform = "translateY(-100%)"; // Move intro off the screen
      popupOverlay.style.transform = "translateY(-100%)"; // Move the popup content into view
    }, 2000); // Wait 2 seconds before starting the transition
  });
  