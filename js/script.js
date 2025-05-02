// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form Validation (Optional)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message submitted successfully!");
  this.reset();
});
