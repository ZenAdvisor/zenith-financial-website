document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover");
    });
  });
});
