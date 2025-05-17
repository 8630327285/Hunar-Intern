// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle About Section Details
document.getElementById('toggleDetails').addEventListener('click', () => {
  const details = document.getElementById('moreDetails');
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
});

// Toggle Project Details
document.querySelectorAll('.view-details').forEach(button => {
  button.addEventListener('click', function () {
    const details = this.nextElementSibling;
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });
});
