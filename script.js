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

// FORM
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

// FORM

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_gn0bw38";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");

      // Clear the form input fields
      this.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
