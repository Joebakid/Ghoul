//  preloader

gsap.fromTo(
  "nav",
  { opacity: 0, yPercent: -100, scale: 0.22 },
  { opacity: 1, yPercent: 0, scale: 1 },
  ">"
);
gsap.fromTo(
  "header",
  { opacity: 0, yPercent: 100, scale: 0.22 },
  { opacity: 1, yPercent: 0, duration: 1, scale: 1 },
  "<50%"
);
// gsap.fromTo("body", { opacity: 0 }, { opacity: 1 }, ">");
