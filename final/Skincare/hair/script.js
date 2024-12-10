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
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      // Scroll to target section and align it slightly lower in the viewport
      window.scrollTo({
        top: targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.clientHeight / 2) + 50,
        behavior: 'smooth'
      });
    });
  });
  
  // Pop-up window logic
  window.onload = function () {
    setTimeout(() => {
      const popup = document.createElement("div");
      popup.id = "popup";
      popup.innerHTML = `
        <p>Are these what you are looking for?</p>
        <button id="yes">Yes</button>
        <button id="no">No</button>
      `;
      document.body.appendChild(popup);
      document.getElementById("popup").style.display = "block";
  
      // Add event listener for the "Yes" button
      document.getElementById("yes").addEventListener("click", () => {
        // Change content to "Perfect"
        popup.innerHTML = `<p>Good to hear!</p>`;
        
        // Wait for 0.5 seconds before closing the popup
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
  