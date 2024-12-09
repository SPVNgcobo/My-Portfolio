document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = 
            `Thank you, ${name}! Your message has been sent.`;
    } else {
        document.getElementById("responseMessage").innerText = 
            "Please fill in all fields.";
    }
});
