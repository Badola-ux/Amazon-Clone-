document.addEventListener("DOMContentLoaded", function () {
    // Search Box Validation
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {
        if (searchInput.value.trim() === "") {
            alert("Please enter a search term.");
        }
    });

    // Cart Animation and Counter
    let cartCount = 0;
    const cartButton = document.querySelector(".nav-cart");
    const cartIcon = document.querySelector(".nav-cart i");

    cartButton.addEventListener("click", function () {
        cartCount++;
        cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
        cartButton.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartButton.style.transform = "scale(1)";
        }, 300);
    });

    // Back to Top Scroll
    const backToTop = document.querySelector(".foot-panel1");
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Navbar Hover Effect
    const navItems = document.querySelectorAll(".border");
    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "transparent";
        });
    });

    // Dark Mode Toggle
    const body = document.body;
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌙 Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.borderRadius = "5px";
    darkModeToggle.style.backgroundColor = "#232f3e";
    darkModeToggle.style.color = "white";
    document.body.appendChild(darkModeToggle);

    let darkMode = false;
    darkModeToggle.addEventListener("click", function () {
        darkMode = !darkMode;
        body.style.backgroundColor = darkMode ? "#121212" : "white";
        body.style.color = darkMode ? "white" : "black";
        darkModeToggle.textContent = darkMode ? "☀ Light Mode" : "🌙 Dark Mode";
    });

    // Live Clock
    const navBar = document.querySelector(".navbar");
    const clock = document.createElement("div");
    clock.style.fontSize = "14px";
    clock.style.marginLeft = "20px";
    navBar.appendChild(clock);

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clock.textContent = `🕒 ${timeString}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Hero Image Slider
    const heroSection = document.querySelector(".hero-section");
    const images = [
        "images/hero-image.jpg",
        "images/hero-image2.jpg",
        "images/hero-image3.jpg",
    ];
    let imageIndex = 0;

    function changeHeroImage() {
        imageIndex = (imageIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url(${images[imageIndex]})`;
    }
    setInterval(changeHeroImage, 4000);

    // Menu Toggle
    const menuButton = document.querySelector(".panel-all");
    const panelOps = document.querySelector(".panel-ops");

    menuButton.addEventListener("click", function () {
        if (panelOps.style.display === "none" || panelOps.style.display === "") {
            panelOps.style.display = "flex";
        } else {
            panelOps.style.display = "none";
        }
    });
});
