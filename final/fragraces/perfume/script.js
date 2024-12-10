// Add hover effect for pop-up animation
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.1)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  
  // Favorite button interaction
  document.querySelectorAll('.favorite-icon').forEach(button => {
    button.addEventListener('click', () => {
      button.style.color = button.style.color === 'red' ? '#333' : 'red';
    });
  });
  
   // Smooth scroll and vertical alignment with a larger offset
   document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      // Check if the link is internal by verifying it contains a hash (#)
      if (this.hash && this.hash.startsWith('#')) {
        e.preventDefault();
        const targetId = this.hash.slice(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          // Scroll to the target section and align slightly lower in the viewport
          window.scrollTo({
            top: targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.clientHeight / 2) + 50,
            behavior: 'smooth'
          });
        }
      } else {
        // Allow external links like "Further Info" to function normally
        window.location.href = this.href;
      }
    });
  });
  

     // Pop-up window logic
  window.onload = function () {
    setTimeout(() => {
      const popup = document.createElement("div");
      popup.id = "popup";
      popup.innerHTML = `
        <p>Find what you're looking for?</p>
        <button id="yes">Yeah</button>
        <button id="no">Nah</button>
      `;
      document.body.appendChild(popup);
      document.getElementById("popup").style.display = "block";
  
      // Add event listener for the "Yes" button
      document.getElementById("yes").addEventListener("click", () => {
        // Change content to "Perfect"
        popup.innerHTML = `<p>Good to hear!</p>`;
        
       
        setTimeout(() => {
          popup.remove();
        }, 1000);
      });
  
      // Add event listener for the "No" button
      document.getElementById("no").addEventListener("click", () => {
        window.location.href = "/final/indexx.html";
      });
    }, 5000);
  };