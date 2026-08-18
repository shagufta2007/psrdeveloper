/* =====================================================
   PSR DEVELOPER
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const budget =
            document.getElementById("budget").value;

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        /* Required fields */

        if (!name || !email || !service || !message) {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.classList.add("show");

            return;
        }


        /* Email subject */

        const subject =
            encodeURIComponent(
                "New Project Inquiry - PSR Developer"
            );


        /* Email body */

        const body =
            encodeURIComponent(

                "NEW PROJECT INQUIRY\n\n" +

                "Name: " + name + "\n" +

                "Email: " + email + "\n" +

                "WhatsApp / Phone: " +
                (phone || "Not provided") + "\n" +

                "Service: " + service + "\n" +

                "Budget: " +
                (budget || "Not specified") + "\n\n" +

                "PROJECT DETAILS:\n" +
                message

            );


        /*
         * Open user's email application
         * and prepare email for PSR Developer
         */

        window.location.href =
            "mailto:psrdeveloper786@gmail.com" +
            "?subject=" +
            subject +
            "&body=" +
            body;

    });

}