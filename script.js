document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading delay
  setTimeout(function () {
    // Hide the preloader
    document.body.classList.add("loaded");

    // Your GSAP animations go here
    const tl = gsap.timeline();

    tl.fromTo(
      "nav",
      { opacity: 0, yPercent: -100 },
      { opacity: 1, yPercent: 0 },
      ">"
    );

    tl.fromTo(
      "header",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1 },
      "<50%"
    );

    // Additional GSAP animations go here
  }, 3000); // Adjust the timeout as needed
});
