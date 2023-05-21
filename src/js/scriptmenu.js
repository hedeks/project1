window.addEventListener('DOMContentLoaded', (event) => {
		  const menuItems = document.querySelectorAll('.navbar li a');
		  menuItems.forEach((item) => {
		    item.addEventListener('mouseenter', () => {
		      item.style.color = 'gray';
		      item.style.transition = 'font-color 0.5s';
		    });

		    item.addEventListener('mouseleave', () => {
		      item.style.color = 'black';
		      item.style.transition = '-color 0.5s';
		    });
		  });
		});