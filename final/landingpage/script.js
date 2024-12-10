document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const popupOverlay = document.getElementById('popup-overlay');
  
    // Simulate the scroll-up effect
    setTimeout(() => {
      intro.style.transform = "translateY(-100%)"; 
      popupOverlay.style.transform = "translateY(-100%)"; 
    }, 2000); 
  });
