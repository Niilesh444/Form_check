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
  e.preventDefault(); // Prevent default

  overlay.classList.remove("hidden"); // Show loader

  // Delay before submitting
  setTimeout(() => {
    overlay.classList.add("hidden"); // Hide loader

    // Submit form by creating a temporary form and submitting that
    const tempForm = document.createElement("form");
    tempForm.action = form.action;
    tempForm.method = form.method;

    // Copy all values from original form
    Array.from(form.elements).forEach((el) => {
      if (!el.name) return;
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = el.name;
      input.value = el.value;
      tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();

    form.reset(); // Clear original form immediately
  }, 3000);
});

