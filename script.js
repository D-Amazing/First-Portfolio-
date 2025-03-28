// Typing Effect 
const textArray = ["A Passionate Web Developer | Photographer | Freelancer | Intelligent "]
let textIndex = 0;
let charIndex = 0; 
let typingSpeed = 100;
let deletingSpeed = 50;
let delayBetweenWords = 1000;

//Creating the function 
function typeEffect() {
    let typedText = document.getElementById("typed-text");
    let currentText = textArray[textIndex];

    if(charIndex < currentText.length) {
        typedText.innerHTML += currentText.charAt(charIndex); c
        charIndex++; 
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, delayBetweenWords); 
    }
}

function eraseEffect() {
    let typedText = document.getElementById("typed-text");
    let currentText = textArray[textIndex]; 

    if(charIndex > 0){
        typedText.innerHTML =currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, deletingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; 
        setTimeout(typeEffect, typingSpeed);
    }
}

// Starting typing effect when the page loads 
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeEffect, 500);
}); 


// Carousel enhancements 
document.addEventListener("DOMContentLoaded", function(){
    let Carousel = document.getElementById("cardCarousel"); 

    // Pause carousel when hovering over it 
    Carousel.addEventListener("mouseover", function(){
        let carouselInstance = bootstrap.Carousel.getInstance(carousel);
        lf(carouselInstance) ; {
            carouselInstance.pause()
        }
    }); 

    // Resume carousel when mouse leaves 
    carousel.addEventListener("mouseleave", function(){
        let carouselInstance = bootstrap.Carousel.getInstance(carousel);
        if(carouselInstance){
            carouselInstance.cycle();
        }
    });
    console.log("Carousel enhancements loaded Successfully!");
}); 


document.addElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
}); 

// Smooth Fade-in on Scroll 
document.addEventListener("DOMContentLoaded", function(){
    let elements = document.querySelectorAll(".fade-in"); 

    function fadeinONScroll() {
        elements.forEach((elemnt) => {
            let position = elements.getBoundingClientRect().top;
            let screenHeight = window.innerHeight; 
            if (position < screenHeight - 100) {
                elements.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", fadeinONScroll);
    fadeinONScroll();
}); 


// Typed Name animation 
var typed = new Typed("typed-name", {
    strings: ["Hi, I'm Devion"],
    typeSpeed: 100,
    backSpeed: 50, 
    loop: false 
}); 

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim(); 
        let date = document.getElementById("date").value; 

        //Email validation regex 
     // Email validation regex
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^[0-9]{10}$/;

if (!firstName || !lastName || !email || !phone || !date) {
alert("All fields are required!");
return;
}

if (!emailPattern.test(email)) {
alert("Enter a valid email address.");
return;
}

if (!phonePattern.test(phone)) {
alert("Enter a valid 10-digit phone number.");
return;
}

// Show success message
document.getElementById("successMessage").style.display = "block";

// Reset form
document.getElementById("bookingForm").reset();
});
}); 
