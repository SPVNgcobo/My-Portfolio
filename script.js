let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
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
