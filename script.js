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
