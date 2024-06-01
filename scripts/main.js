document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready");

  // Smooth scrolling for anchor links
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    console.log("Smooth scrolling to:", targetEl);

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".menu a");
    links.forEach((each) => {
      each.addEventListener("click", function (e) {
        e.preventDefault();
        const currentTarget = this.getAttribute("href");
        console.log("Link clicked:", currentTarget);
        if (currentTarget.startsWith("#")) {
          smoothScroll(currentTarget, 1000);
        } else {
          window.location.href = currentTarget;
        }
      });
    });
  };
  scrollTo();

  // Show/Hide Mobile Menu (if applicable)
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close Mobile Menu on Link Click
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
});
