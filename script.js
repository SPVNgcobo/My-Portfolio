// script.js

// Carousel functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    currentSlide = index;
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        // Display success message
        document.getElementById("responseMessage").innerHTML = 
            `<span style="color:green;">Thank you, ${name}! Your message has been sent successfully.</span>`;

        // Reset form fields
        document.getElementById("contactForm").reset();

        // Optional: Add code to send the form data to a server if needed
        // For example, using fetch or AJAX
    } else {
        // Display error message
        document.getElementById("responseMessage").innerHTML = 
            `<span style="color:red;">Please fill in all fields.</span>`;
    }
});
