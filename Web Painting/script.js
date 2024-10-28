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
    // Select the scroll container

    
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


// Get the elements for UCCA Edge and MediaBrands
const uccaLink = document.querySelector('.ucca-link');
const uccaOverlay = document.getElementById('ucca-overlay');
const closeUccaBtn = document.getElementById('close-ucca');

// Add click event to UCCA Edge link
uccaLink.addEventListener('click', function (e) {
    e.preventDefault();
    uccaOverlay.classList.add('active'); // Slide in the UCCA overlay
    document.body.style.overflow = 'hidden'; // Disable background scrolling
});

// Add click event to the close button for UCCA
closeUccaBtn.addEventListener('click', function () {
    uccaOverlay.classList.remove('active'); // Slide out the UCCA overlay
    document.body.style.overflow = ''; // Re-enable background scrolling
});

// Get the elements for the Tokyo Experience and Documentary links and overlays
const tokyo1Link = document.querySelector('.tokyo1-link');
const tokyo1Overlay = document.getElementById('tokyo1-overlay');
const closeTokyo1Btn = document.getElementById('close-tokyo1');

const tokyo2Link = document.querySelector('.tokyo2-link');
const tokyo2Overlay = document.getElementById('tokyo2-overlay');
const closeTokyo2Btn = document.getElementById('close-tokyo2');

// Add click event to the "experience" link (Tokyo 1)
tokyo1Link.addEventListener('click', function (e) {
    e.preventDefault();
    tokyo1Overlay.classList.add('active'); // Slide in the Tokyo 1 overlay
    document.body.style.overflow = 'hidden'; // Disable background scrolling
});

// Add click event to the "documentary" link (Tokyo 2)
tokyo2Link.addEventListener('click', function (e) {
    e.preventDefault();
    tokyo2Overlay.classList.add('active'); // Slide in the Tokyo 2 overlay
    document.body.style.overflow = 'hidden'; // Disable background scrolling
});

// Add click event to close button for Tokyo 1
closeTokyo1Btn.addEventListener('click', function () {
    tokyo1Overlay.classList.remove('active'); // Slide out the Tokyo 1 overlay
    document.body.style.overflow = ''; // Re-enable background scrolling
});

// Add click event to close button for Tokyo 2
closeTokyo2Btn.addEventListener('click', function () {
    tokyo2Overlay.classList.remove('active'); // Slide out the Tokyo 2 overlay
    document.body.style.overflow = ''; // Re-enable background scrolling
});