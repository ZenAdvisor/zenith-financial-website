document.addEventListener("DOMContentLoaded", function () {
  fetch("partials/testimonial.html")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text();
    })
    .then((data) => {
      document.getElementById("testimonial-section").innerHTML = data;
    })
    .catch((error) => console.error("Error loading testimonial:", error));
});
