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

// Variables for letter button

const letterButton = document.querySelector(".letter");
const firstLine= document.querySelector(".firstLine");
const secondLine= document.querySelector(".secondLine")
const thirdLine= document.querySelector(".thirdLine")

function letter() {
    if (firstLine.classList.contains("inscribe")){
        firstLine.classList.remove("inscribe");
        secondLine.classList.remove("inscribe");
        thirdLine.classList.remove("inscribe");
        letterButton.style.backgroundColor = "#2d584330";
        letterButton.innerHTML="&#9754; Letter Me"
        
    } else {
        firstLine.classList.add("inscribe");
        secondLine.classList.add("inscribe");
        thirdLine.classList.add("inscribe");
        letterButton.style.backgroundColor = "#2d584370";
        letterButton.innerHTML="&#9754; Delete Me"

    }
}

letterButton.addEventListener('click', letter);