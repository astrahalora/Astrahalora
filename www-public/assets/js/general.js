const navElement = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");
let isNavVisible = true;

function updateDisplay() {
    if (window.innerWidth > 670) {
        navElement.style.display = "flex";
        isNavVisible = true;
    } else {
        navElement.style.display = "none";
        isNavVisible = false;
    };
};

hamburger.addEventListener("click", function () {
    if (isNavVisible) {
        navElement.style.display = "none";
        isNavVisible = false; 
    } else {
        navElement.style.display = "flex";
        isNavVisible = true; 
    };
});

if (window.innerWidth <= 670) {
    const pageLinks = Array.from(navElement.querySelectorAll("a"));
    pageLinks.forEach((pageLink) => {
        pageLink.addEventListener("click", function () {
            navElement.style.display = "none";
            isNavVisible = false; 
        });
    });
};

window.addEventListener("resize", updateDisplay);

updateDisplay();


