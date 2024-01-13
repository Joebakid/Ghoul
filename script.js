//  preloader

gsap.fromTo(
  "nav",
  { opacity: 0, yPercent: -100 },
  { opacity: 1, yPercent: 0 },
  ">"
);
gsap.fromTo(
  "header",
  { opacity: 0, yPercent: 100 },
  { opacity: 1, yPercent: 0, duration: 1 },
  "<50%"
);
// gsap.fromTo("body", { opacity: 0 }, { opacity: 1 }, ">");

//
document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading delay
  setTimeout(function () {
    // Hide the preloader
    document.body.classList.add("loaded");
  }, 3000); // Adjust the timeout as needed
});
