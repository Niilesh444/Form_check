const form = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop immediate redirect
  overlay.classList.remove("hidden"); // Show loader

  // Wait 3 seconds then submit the form manually
  setTimeout(() => {
    overlay.classList.add("hidden"); // Hide loader just before redirect
    form.submit(); // Let the form go to Formspree
  }, 3000);
});

