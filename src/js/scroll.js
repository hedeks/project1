window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logoContainer = document.querySelector('.logo-container');
  
    if (window.scrollY > 0) {
      header.classList.add('sticky-header');
      logoContainer.style.display = 'none';
    } else {
      header.classList.remove('sticky-header');
      logoContainer.style.display = 'block';
    }
  });