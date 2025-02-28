// === PRELOADER === //
window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 1000);
});

// === MOBILE MENU TOGGLE === //
function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    menu.style.right = menu.style.right === "0px" ? "-100%" : "0px";
}

// === HERO SECTION SLIDESHOW === //
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");

function showHeroSlides() {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlides[heroIndex].classList.add("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
}
setInterval(showHeroSlides, 3000);
showHeroSlides();

// === ABOUT SECTION IMAGE SLIDESHOW === //
// Gooey Effect Canvas (Blue Particles)
// const canvas = document.getElementById("gooeyCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let aboutSection = document.getElementById('about');
let canvas = document.getElementById('gooeyCanvas');
const ctx = canvas.getContext("2d");

// canvas.width = aboutSection.innerWidth;
// canvas.height = aboutSection.innerHeight;

canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

class Particle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = `rgba(0, 102, 255, 0.8)`;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.velocity.y = -this.velocity.y;
        }

        this.draw();
    }
}

// Create Particles
function initParticles() {
    particles = [];
    for (let i = 0; i < 15; i++) {
        let radius = Math.random() * 30 + 15;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y, radius));
    }
}

// Animate Particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
    });

    requestAnimationFrame(animateParticles);
}

// Start Animation
initParticles();
animateParticles();

// Image Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);
showSlides();
 // Moving SVG Animation with JS
const svg = document.getElementById("moving-svg");

function moveSvg() {
    let x = 0;
    let direction = 1;

    setInterval(() => {
        if (x > window.innerWidth - 100 || x < 0) {
            direction *= -1;
        }
        x += 2 * direction;
        svg.style.transform = `translateX(${x}px)`;
    }, 20);
}

moveSvg();
const prayerForm = document.getElementById('prayer-request-form');
const contactForm = document.getElementById('contact-us-form');
const toggleBtn = document.getElementById('toggle-form-btn');

toggleBtn.addEventListener('click', () => {
    if (prayerForm.classList.contains('hidden')) {
        // Show Prayer Request, Hide Contact Us
        prayerForm.classList.remove('hidden');
        contactForm.classList.add('hidden');
        toggleBtn.textContent = 'Contact Us';
    } else {
        // Show Contact Us, Hide Prayer Request
        prayerForm.classList.add('hidden');
        contactForm.classList.remove('hidden');
        toggleBtn.textContent = 'Prayer Request';
    }
});

