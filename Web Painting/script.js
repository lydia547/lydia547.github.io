// Wait for the text animation to finish, then trigger the page scroll
window.addEventListener('load', () => {
    // Set a timeout to match the timing of the text animations
    setTimeout(() => {
        // Slide the intro text out of view to the left
        document.querySelector('.intro-container').style.transform = 'translateX(-100vw)';
        
        // Slide the main content into view
        document.querySelector('.main-content').style.transform = 'translateX(-100vw)';
    }, 4000); // Adjust the delay to match the last text animation (3.5s for text delay + buffer)
});
