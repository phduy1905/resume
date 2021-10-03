// Active Nav
const nav = document.querySelector("#nav");
const overlay = document.querySelector("#overlay");
const closeNavBtn = document.querySelector("#close-nav");
const openNavBtn = document.querySelector("#open-nav");
const navLinks = document.querySelectorAll(".nav__link");

const openNav = () => {
  nav.classList.add("nav-show");
  overlay.classList.add("overlay-show");
};

const closeNav = () => {
  nav.classList.remove("nav-show");
  overlay.classList.remove("overlay-show");
};

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

// Toggle dark theme
const toggleThemeButtons = document.querySelectorAll(".toggle-theme");

toggleThemeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (button.classList.contains("bxs-moon")) {
      button.classList.remove("bxs-moon");
      button.classList.add("bxs-sun");
    } else {
      button.classList.add("bxs-moon");
      button.classList.remove("bxs-sun");
    }
  });
});

// Generate PDF
let areaCv = document.querySelector("#area-cv");

// Reduce the size and print on an A4 sheet
function scaleCV() {
  document.body.classList.add("scale-cv");
}

// Remove the size when cv is downloaded
function removeScale() {
  document.body.classList.remove("scale-cv");
}

// Generate PDF
let resumeButton = document.querySelector(".download-pdf");

let opt = {
  margin: 0,
  filename: "PhamDuy_Resume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

function generateResume() {
  html2pdf(areaCv, opt);
}

// When button is clicked, it executes 3 functions
resumeButton.addEventListener("click", () => {
  scaleCV();
  generateResume();
  setTimeout(removeScale, 3000);
});
