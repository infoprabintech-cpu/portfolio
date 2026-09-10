const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id], div[id]");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const revealElements = document.querySelectorAll(
    ".skills, .services, .experience, .education, .projects, .contact"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);

    navLinks.forEach(link => link.classList.remove("active"));

    const homeLink = document.querySelector('.nav-links a[href="#home"]');

    if (homeLink) {
        homeLink.classList.add("active");
    }
});
function confirmCVDownload(event) {
    event.preventDefault();

    const answer = confirm("Do you want to download my CV?");

    if (answer) {
        const link = document.createElement("a");
        link.href = "Ratna-Prasad-Tharu-CV.pdf";
link.download = "Ratna-Prasad-Tharu-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

   
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});
