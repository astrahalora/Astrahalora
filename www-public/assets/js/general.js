const navElement = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");

function updateDisplay() {
    if(window.innerWidth > 670) {
        navElement.style.display = "flex";
    } else {
        navElement.style.display = "none";
    }
};

hamburger.addEventListener("click", function() {
    if(window.getComputedStyle(navElement).display === "none") {
        navElement.style.display = "flex";
    } else {
        navElement.style.display = "none";
    };
});

window.addEventListener("resize", updateDisplay);

