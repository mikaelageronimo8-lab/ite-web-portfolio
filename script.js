const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const themeLabel = themeToggle.querySelector("span");

const heroPhoto = document.getElementById("heroPhoto");

const lightPicture = "profile2.png";
const darkPicture = "picko1.jpeg";

const savedTheme = localStorage.getItem("mika-portfolio-theme");

let isDark = savedTheme === "dark";


function updateTheme() {
    document.body.classList.toggle("dark-mode", isDark);

    heroPhoto.src = isDark ? darkPicture : lightPicture;

    heroPhoto.alt = isDark
        ? "Mikaela's dark mode profile photo"
        : "Mikaela's light mode profile photo";

    themeIcon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeLabel.textContent = isDark
        ? "Light mode"
        : "Dark mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );

    localStorage.setItem(
        "mika-portfolio-theme",
        isDark ? "dark" : "light"
    );
}


themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    updateTheme();
});


updateTheme();



const revealSections = document.querySelectorAll(".reveal-section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealSections.forEach((section) => {
        observer.observe(section);
    });

} else {
    revealSections.forEach((section) => {
        section.classList.add("is-visible");
    });
}



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle(
        "visible",
        window.scrollY > 450
    );
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



document.querySelectorAll(
    ".feature-card, .navbar a, .pill-button"
).forEach((link) => {

    link.addEventListener("click", () => {
        const href = link.getAttribute("href");

        if (!href || !href.startsWith("#")) {
            return;
        }

        const target = document.querySelector(href);

        if (target && target.classList.contains("reveal-section")) {
            target.classList.remove("is-visible");

            window.setTimeout(() => {
                target.classList.add("is-visible");
            }, 80);
        }
    });
});
