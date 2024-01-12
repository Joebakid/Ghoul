//  preloader

gsap.fromTo(
  ".preloader-logo",
  { scale: 0.1, opacity: 1 },
  { scale: 4, duration: 5, opacity: 0 },
  ">"
);

gsap.fromTo(
  ".overlay",
  { autoAlpha: 1 },
  { autoAlpha: 0, backgroundColor: "transparent" },
  ">"
);

gsap.fromTo(
  "nav",
  { opacity: 0, yPercent: -100 },
  { opacity: 1, yPercent: 0, duration: 1 },
  ">"
);
gsap.fromTo(
  "header",
  { opacity: 0, yPercent: 100 },
  { opacity: 1, yPercent: 0, duration: 2 },
  "<50%"
);
// gsap.fromTo("body", { opacity: 0 }, { opacity: 1 }, ">");
