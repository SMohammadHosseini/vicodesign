document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".header");
    let image = document.querySelector(".main-image");
    let righttext = document.querySelector(".right-text");
    let lefttext = document.querySelector(".left-text");


    header.style.opacity = "1";
    setTimeout(() => { image.style.opacity = "1"; }, 500);
    setTimeout(() => { righttext.style.opacity = "1"; }, 1000);
    setTimeout(() => { lefttext.style.opacity = "1"; }, 1500);   
});
document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".main-image");

    if (card) {
        const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
        const THRESHOLD = 15;

        function handleMouseMove(e) {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const horizontal = clientX / innerWidth;
            const vertical = clientY / innerHeight;
            const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

            card.style.transform = `perspective(600px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 5)`;
        }

        if (!motionMatchMedia.matches) {
            document.addEventListener("mousemove", handleMouseMove);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutContainer = document.querySelector(".about-container");

    function handleScroll() {
        const rect = aboutContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.65) { // Trigger when aboutContainer is 20% from the top
            aboutContainer.classList.add("visible");
            window.removeEventListener("scroll", handleScroll); // Remove event listener once it's visible
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on page load in case it's already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const certificatesContainer = document.querySelector(".certificates");

    function handleScroll() {
        if (!certificatesContainer) return; // Prevent errors if the element doesn't exist

        const rect = certificatesContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75) {
            certificatesContainer.classList.add("visible");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector(".projects");

    function handleScroll() {
        if (!projectContainer) return; // Prevent errors if the element doesn't exist

        const rect = projectContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75) {
            projectContainer.classList.add("visible");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const contactContainer = document.querySelector("#contact");

    function handleScroll() {
        if (!contactContainer) return; // Prevent errors if the element doesn't exist

        const rect = contactContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75) {
            contactContainer.classList.add("visible");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});