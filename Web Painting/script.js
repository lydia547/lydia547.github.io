// Wait for the text animation to finish, then trigger the page scroll and show the nav bar
window.addEventListener('load', () => {
    // Set a timeout to match the timing of the text animations
    setTimeout(() => {
        // Slide the intro text out of view to the left
        document.querySelector('.intro-container').style.transform = 'translateX(-100vw)';
        
        // After the intro animation, reveal the second content (sentences)
        const introText = document.querySelector('.intro-text');
        introText.classList.remove('hidden');
        introText.style.opacity = 1;  // Fade in the text

        // Show the navbar after the intro animation completes
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }, 4000); // Adjust the delay to match the last text animation

    // Add scroll event listener for showing the images after the intro text
    window.addEventListener('scroll', function() {
        const introText = document.querySelector('.intro-text');
        const imagesSection = document.querySelector('.main-content');
        const introPosition = introText.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (introPosition < windowHeight) {
            // Show the images section once the user scrolls past the intro text
            imagesSection.classList.remove('hidden');
            imagesSection.style.opacity = 1;  // Fade in the images
        }
    });
});

// Overlay handling for various sections (Fudan, UCCA, Tokyo1, Tokyo2)
function setupOverlay(linkSelector, overlaySelector, closeBtnSelector) {
    const link = document.querySelector(linkSelector);
    const overlay = document.getElementById(overlaySelector);
    const closeBtn = document.getElementById(closeBtnSelector);

    // Open overlay on link click
    link.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.add('active'); // Slide in the overlay
        document.body.style.overflow = 'hidden'; // Disable background scrolling
    });

    // Close overlay on close button click
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active'); // Slide out the overlay
        document.body.style.overflow = ''; // Re-enable background scrolling
    });
}

// Set up overlay interactions
setupOverlay('.fudan-link', 'fudan-overlay', 'close-fudan');
setupOverlay('.ucca-link', 'ucca-overlay', 'close-ucca');
setupOverlay('.tokyo1-link', 'tokyo1-overlay', 'close-tokyo1');
setupOverlay('.tokyo2-link', 'tokyo2-overlay', 'close-tokyo2');
