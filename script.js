
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const themeLabel = themeToggle.querySelector("span");

// Load the saved theme
const savedTheme = localStorage.getItem("mika-portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

// Light mode and dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const theme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("mika-portfolio-theme", theme);

    updateThemeButton();
});

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeIcon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeLabel.textContent = isDark
        ? "Light mode"
        : "Dark mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}


// Fade-in animation for sections
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


// Back-to-top button
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


// Smooth navigation and card animation
document.querySelectorAll(
    ".feature-card, .navbar a, .pill-button"
).forEach((link) => {

    link.addEventListener("click", () => {
        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.classList.remove("is-visible");

            window.setTimeout(() => {
                target.classList.add("is-visible");
            }, 80);
        }
    });

});
