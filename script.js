// Variables for image slider

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const slides = [
    document.getElementById("slide1"),
    document.getElementById("slide2"),
    document.getElementById("slide3"),
    document.getElementById("slide4")
]

// function for image slider
function next() {
    let activeIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    let nextIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.remove("active");
    slides[nextIndex].classList.add("active");
}

function previous() {
    let activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
    let nextIndex = (activeIndex - 1 + slides.length) % slides.length;
    slides[activeIndex].classList.remove("active");
    slides[nextIndex].classList.add("active"); 
}

// Left and right buttons
leftButton.addEventListener('click', previous);
rightButton.addEventListener('click', next);