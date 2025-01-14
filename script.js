// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation (basic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    let name = this.querySelector('[name="name"]').value;
    let email = this.querySelector('[name="email"]').value;
    let message = this.querySelector('[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        e.preventDefault();
    } else {
        alert('Message Sent!');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const projects = document.querySelectorAll('.project');
    const carouselContainer = document.querySelector('.carousel-container');

    setInterval(() => {
        // Move to the next project
        currentIndex = (currentIndex + 1) % projects.length;
        const offset = -currentIndex * 100; // Move 100% for each project
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }, 5000); // Change project every 5 seconds
});

