// Wait for the text animation to finish, then trigger the page scroll and show the nav bar
window.addEventListener('load', () => {
    // Set a timeout to match the timing of the text animations
    setTimeout(() => {
        // Slide the intro text out of view to the left
        document.querySelector('.intro-container').style.transform = 'translateX(-100vw)';
        
        // After intro animation, show the second content (sentences)
        const introText = document.querySelector('.intro-text');
        introText.classList.remove('hidden');
        introText.style.opacity = 1;  // Fade in the text

        // Show the navbar after the intro animation completes
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }, 4000); // Adjust the delay to match the last text animation (3.5s for text delay + buffer)
    
    // Add scroll event listener for showing the images after the sentences
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

