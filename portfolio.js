document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        menu.classList.toggle('active-menu');
    });

    // Smooth Scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


