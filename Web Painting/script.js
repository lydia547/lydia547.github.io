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

// Get the elements
const fudanLink = document.querySelector('.fudan-link');
const fudanOverlay = document.getElementById('fudan-overlay');
const closeFudanBtn = document.getElementById('close-fudan');

// Add click event to Fudan University link
fudanLink.addEventListener('click', function (e) {
    e.preventDefault();
    fudanOverlay.classList.add('active'); // Slide in the overlay
    document.body.style.overflow = 'hidden'; // Disable background scrolling
});

// Add click event to the close button
closeFudanBtn.addEventListener('click', function () {
    fudanOverlay.classList.remove('active'); // Slide out the overlay
    document.body.style.overflow = ''; // Re-enable background scrolling
});

// Get the elements for UCCA Edge and MediaBrands
const uccaLink = document.querySelector('.ucca-link');
const uccaOverlay = document.getElementById('ucca-overlay');
const closeUccaBtn = document.getElementById('close-ucca');

const mediaBrandsLink = document.querySelector('.mediabrands-link');
const mediaBrandsOverlay = document.getElementById('mediabrands-overlay');
const closeMediaBrandsBtn = document.getElementById('close-mediabrands');

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

// Add click event to MediaBrands link
mediaBrandsLink.addEventListener('click', function (e) {
    e.preventDefault();
    mediaBrandsOverlay.classList.add('active'); // Slide in the MediaBrands overlay
    document.body.style.overflow = 'hidden'; // Disable background scrolling
});

// Add click event to the close button for MediaBrands
closeMediaBrandsBtn.addEventListener('click', function () {
    mediaBrandsOverlay.classList.remove('active'); // Slide out the MediaBrands overlay
    document.body.style.overflow = ''; // Re-enable background scrolling
});


