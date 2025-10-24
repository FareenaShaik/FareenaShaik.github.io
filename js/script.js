// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal on scroll (fade + slide)
const revealElements = document.querySelectorAll('.fade-in, .slide-up');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Light/Dark Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});
