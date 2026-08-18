/* =========================================
   PSR DEVELOPER
   MAIN JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {

            menuButton.innerHTML = "✕";

        } else {

            menuButton.innerHTML = "☰";

        }

    });


    /* Close menu after clicking link */

    const navLinks =
        document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuButton.innerHTML = "☰";

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .portfolio-card, .process-card, .cta-box"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, 50);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function() {

        item.classList.toggle("active");

    });

});
/* =====================================================
   PORTFOLIO FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioCards =
    document.querySelectorAll(".portfolio-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Get selected category */

        const filter =
            button.getAttribute("data-filter");


        /* Change active button */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter projects */

        portfolioCards.forEach(function(card) {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "";

                setTimeout(function() {

                    card.classList.add("show");

                }, 10);

            }

            else {

                card.classList.remove("show");

                card.style.display = "none";

            }

        });

    });

});