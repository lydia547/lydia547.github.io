document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const popupOverlay = document.getElementById('popup-overlay');

  // Simulate the scroll-up effect
  setTimeout(() => {
    intro.style.transform = "translateY(-100%)"; // Move intro off the screen
    popupOverlay.style.transform = "translateY(-100%)"; // Move the popup content into view
  }, 2000); // Wait 2 seconds before starting the transition

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
