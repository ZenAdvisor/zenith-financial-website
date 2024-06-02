document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const faqAnswer = question.nextElementSibling;

      if (faqAnswer.style.display === "block") {
        faqAnswer.style.display = "none";
      } else {
        faqAnswer.style.display = "block";
      }

      // Rotate arrow icon
      const icon = question.querySelector("span");
      if (icon) {
        icon.classList.toggle("rotate");
      }
    });
  });

  const faqSubQuestions = document.querySelectorAll(".faq-subquestion");

  faqSubQuestions.forEach((subquestion) => {
    subquestion.addEventListener("click", () => {
      subquestion.classList.toggle("active");
      const faqSubAnswer = subquestion.nextElementSibling;

      if (faqSubAnswer.style.display === "block") {
        faqSubAnswer.style.display = "none";
      } else {
        faqSubAnswer.style.display = "block";
      }

      // Rotate arrow icon
      const icon = subquestion.querySelector("span");
      if (icon) {
        icon.classList.toggle("rotate");
      }
    });
  });
});
