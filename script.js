// Toggle hamburger menu on small screens
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Toggle experience section expansion
document.querySelectorAll(".experience-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Reserved for future interactivity
console.log("Portfolio loaded.");
