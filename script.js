// const form = document.getElementById("contact-form");
// const overlay = document.getElementById("overlay");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Stop immediate redirect
//   overlay.classList.remove("hidden"); // Show loader

//   // Wait 3 seconds then submit the form manually
//   setTimeout(() => {
//     overlay.classList.add("hidden"); // Hide loader just before redirect
//     form.submit(); // Let the form go to Formspree
//   }, 3000);
// });
const form = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop immediate form submission
  overlay.classList.remove("hidden"); // Show loader

  // Wait 3 seconds to simulate "loading"
  setTimeout(() => {
    form.reset(); // Clear form before redirect
    overlay.classList.add("hidden"); // Hide loader
    form.submit(); // Manually submit the form to allow Formspree redirect
  }, 3000);
});
