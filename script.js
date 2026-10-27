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



/* Spider-Man dark mode: web na lumalabas sa paligid ng cursor (hero section) */
const landing = document.getElementById("homecon");

if (landing) {
    const cx = 500, cy = 380, spokes = 16;
    let web = "";

    for (let i = 0; i < spokes; i++) {
        const a = (i / spokes) * Math.PI * 2;
        web += `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(a) * 1100).toFixed(1)}" y2="${(cy + Math.sin(a) * 1100).toFixed(1)}"/>`;
    }

    for (let r = 70; r <= 1000; r += r < 300 ? 70 : 110) {
        let d = "";
        for (let j = 0; j <= spokes; j++) {
            const a = (j / spokes) * Math.PI * 2;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;

            if (j === 0) {
                d += `M${x.toFixed(1)} ${y.toFixed(1)}`;
            } else {
                const m = ((j - 0.5) / spokes) * Math.PI * 2;
                const k = r * 0.93;
                d += ` Q${(cx + Math.cos(m) * k).toFixed(1)} ${(cy + Math.sin(m) * k).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
            }
        }
        web += `<path d="${d}"/>`;
    }

    const layer = document.createElement("div");
    layer.className = "web-layer";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = `<svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-width="1">${web}</svg>`;
    landing.prepend(layer);

    const moveWeb = (x, y) => {
        const box = landing.getBoundingClientRect();
        landing.style.setProperty("--mx", `${x - box.left}px`);
        landing.style.setProperty("--my", `${y - box.top}px`);
    };

    landing.addEventListener("pointermove", (e) => moveWeb(e.clientX, e.clientY));
    landing.addEventListener("touchmove", (e) => {
        moveWeb(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
}
