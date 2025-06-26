// const form = document.getElementById("contact-form");
// const overlay = document.getElementById("overlay");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent default form submission
//   overlay.classList.remove("hidden"); // Show overlay immediately

//   emailjs
//     .sendForm("service_id", "template_id", this)
//     .then(() => {
//       overlay.classList.add("hidden"); // Hide overlay first
//       setTimeout(() => {
//         alert("✅ Email sent successfully!");
//       }, 50); // Small delay allows the overlay to hide first
//     })
//     .catch(() => {
//       overlay.classList.add("hidden");
//       setTimeout(() => {
//         alert("❌ Failed to send email. Please try again.");
//       }, 50);
//     })
//     .finally(() => {
//       form.reset(); // Reset form in all cases
//     });
// });


// const form = document.getElementById("contact-form");
// const overlay = document.getElementById("overlay");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Stop the default form submission
//   overlay.classList.remove("hidden"); // Show loading overlay

//   const formData = new FormData(form);

//   fetch(form.action, {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       overlay.classList.add("hidden");
//       if (response.ok) {
//         alert("✅ Email sent successfully!");
//         form.reset();
//       } else {
//         response.json().then((data) => {
//           alert(data.error || "❌ Failed to send email. Please try again.");
//         });
//       }
//     })
//     .catch(() => {
//       overlay.classList.add("hidden");
//       alert("❌ Failed to send email. Please try again.");
//     });
// });


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
