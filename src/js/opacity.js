window.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('body > *:not(header)');
    
    elements.forEach((element) => {
      element.style.transition = 'opacity 0.5s ease';
      element.style.opacity = '1';
    });
  });