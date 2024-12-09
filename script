document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerHTML = 
            `<span style="color:green;">Thank you, ${name}! Your message has been sent successfully.</span>`;
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = 
            `<span style="color:red;">Please fill in all fields.</span>`;
    }
});
