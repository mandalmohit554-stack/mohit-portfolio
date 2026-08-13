// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .journey, .resume, .contact"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= CUSTOM CURSOR =================

const cursor = document.querySelector(".cursor");
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});

// ================= CURSOR HOVER =================

const interactiveElements = document.querySelectorAll(
    "button, a, li, .skill-card, .project-card, .stat"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorGlow.style.width = "70px";
        cursorGlow.style.height = "70px";

    });

    element.addEventListener("mouseleave", () => {

        cursorGlow.style.width = "40px";
        cursorGlow.style.height = "40px";

    });

});

// ================= PARTICLES =================

const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${5 + Math.random() * 10}s`;

    particle.style.animationDelay =
        `${Math.random() * 5}s`;

    particleContainer.appendChild(particle);

}

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});

// ================= 3D PROJECT CARD =================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

// ================= SKILL BAR ANIMATION =================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    const progress = card.querySelector(".skill-progress");

    card.addEventListener("mouseenter", () => {

        const level = progress.dataset.level;

        progress.style.width = `${level}%`;

    });

    card.addEventListener("mouseleave", () => {

        progress.style.width = "0";

    });

});

// ================= MAGNETIC BUTTONS =================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0, 0)";

    });

});

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.textContent = "Message Ready ✓";

    setTimeout(() => {
        button.textContent = "Send Message ↗";
    }, 2000);

});