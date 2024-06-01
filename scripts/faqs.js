document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");
  const faqSubquestions = document.querySelectorAll(".faq-subquestion");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
        question.innerHTML = question.innerHTML.replace("&#9656;", "&#9662;");
      } else {
        answer.style.display = "block";
        question.innerHTML = question.innerHTML.replace("&#9662;", "&#9656;");
      }

      question.classList.toggle("active");
    });
  });

  faqSubquestions.forEach((subquestion) => {
    subquestion.addEventListener("click", () => {
      const subanswer = subquestion.nextElementSibling;

      if (subanswer.style.display === "block") {
        subanswer.style.display = "none";
        subquestion.innerHTML = subquestion.innerHTML.replace(
          "&#9662;",
          "&#9656;"
        );
      } else {
        subanswer.style.display = "block";
        subquestion.innerHTML = subquestion.innerHTML.replace(
          "&#9656;",
          "&#9662;"
        );
      }

      subquestion.classList.toggle("active");
    });
  });
});
