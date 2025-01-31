document.addEventListener("DOMContentLoaded", function () {
    // Effet de défilement fluide sur les liens de navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animation sur le formulaire après envoi
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Merci pour votre message !");
        this.reset();
    });
});