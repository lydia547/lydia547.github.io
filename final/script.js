document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const popupOverlay = document.getElementById('popup-overlay');

  // Simulate the scroll-up effect
  setTimeout(() => {
    intro.style.transform = "translateY(-100%)"; 
    popupOverlay.style.transform = "translateY(-100%)"; 
  }, 2000);

  // Add click event listeners to all elements with the "choice" class
  document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
      // Get the value of the "data-link" attribute
      const targetLink = choice.getAttribute('data-link');
      
      // Navigate to the target page
      if (targetLink) {
        window.location.href = targetLink;
      }
    });
  });
});
