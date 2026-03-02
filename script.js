// Popup
window.onload = function () {
    setTimeout(() => {
        document.getElementById("offerPopup").style.display = "flex";
    }, 2000);
}

function closePopup() {
    document.getElementById("offerPopup").style.display = "none";
}

// Scroll Reveal
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);