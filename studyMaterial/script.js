// Select all buttons
const buttons = document.querySelectorAll('.button');

// Add hover animation using JavaScript
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transition = 'transform 0.3s ease';
    button.style.transform = 'scale(1.2)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
