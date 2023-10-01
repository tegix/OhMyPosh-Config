const lightModeIcon = document.getElementById("light-mode-icon");
const darkModeIcon = document.getElementById("dark-mode-icon");
const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const steps = document.querySelectorAll(".step");
const preElements = document.querySelectorAll("pre");
const codeElements = document.querySelectorAll("code");

function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    steps.forEach((step) => step.classList.remove("dark-mode"));
    preElements.forEach((pre) => pre.classList.remove("dark-mode"));
    codeElements.forEach((code) => code.classList.remove("dark-mode"));
    lightModeIcon.style.display = "inline";
    darkModeIcon.style.display = "none";
  } else {
    body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    steps.forEach((step) => step.classList.add("dark-mode"));
    preElements.forEach((pre) => pre.classList.add("dark-mode"));
    codeElements.forEach((code) => code.classList.add("dark-mode"));
    lightModeIcon.style.display = "none";
    darkModeIcon.style.display = "inline";
  }
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
