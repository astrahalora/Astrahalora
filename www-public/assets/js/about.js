const footerElement = document.querySelector(".footer");

function handleWindowResize() {
    if (window.innerWidth <= 1000 || window.innerHeight <= 600) {
        footerElement.classList.remove("fixed-footer");
    } else {
        if (!footerElement.classList.contains("fixed-footer")) {
            footerElement.classList.add("fixed-footer");
        }
    }
}

handleWindowResize();

window.addEventListener("resize", handleWindowResize);