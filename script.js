console.log("Diya's portfolio is running!");
// =========================
// LIGHT / DARK THEME
// =========================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent =
        isDark ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});
// =========================================
// MOUSE FOLLOWING LIGHT
// =========================================

document.addEventListener("mousemove", (event) => {

    document.body.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
    );

    document.body.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
    );

});
// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .experience-card, .education-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
// =========================================
// INTERACTIVE PROJECT CARDS
// =========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
// =========================================
// ANIMATE SKILL BARS
// =========================================

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width =
                    bar.style.getPropertyValue("--skill");

            }

        });

    },
    {
        threshold: 0.5
    }
);

skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});
// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                });

                const activeLink =
                    document.querySelector(
                        `nav a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach((section) => {

    navObserver.observe(section);

});