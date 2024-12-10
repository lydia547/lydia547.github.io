// Adding interactivity to dynamically display sections
document.getElementById('male-section').addEventListener('mouseover', () => {
    document.getElementById('male-options').style.display = 'block';
  });
  
  document.getElementById('male-section').addEventListener('mouseleave', () => {
    document.getElementById('male-options').style.display = 'none';
  });
  
  document.getElementById('female-section').addEventListener('mouseover', () => {
    document.getElementById('female-options').style.display = 'block';
  });
  
  document.getElementById('female-section').addEventListener('mouseleave', () => {
    document.getElementById('female-options').style.display = 'none';
  });
  