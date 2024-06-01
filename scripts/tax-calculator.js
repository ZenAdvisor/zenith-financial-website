document.addEventListener("DOMContentLoaded", function () {
  const usTaxForm = document.getElementById("us-tax-form");
  const canadaTaxForm = document.getElementById("canada-tax-form");

  usTaxForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById("us-income").value);
    const status = document.getElementById("us-status").value;
    const deductions =
      parseFloat(document.getElementById("us-deductions").value) || 0;

    const taxableIncome = income - deductions;
    let tax = 0;

    if (status === "single") {
      if (taxableIncome <= 9875) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome <= 40125) {
        tax = 987.5 + (taxableIncome - 9875) * 0.12;
      } else if (taxableIncome <= 85525) {
        tax = 4617.5 + (taxableIncome - 40125) * 0.22;
      } else if (taxableIncome <= 163300) {
        tax = 14605.5 + (taxableIncome - 85525) * 0.24;
      } else if (taxableIncome <= 207350) {
        tax = 33271.5 + (taxableIncome - 163300) * 0.32;
      } else if (taxableIncome <= 518400) {
        tax = 47367.5 + (taxableIncome - 207350) * 0.35;
      } else {
        tax = 156235 + (taxableIncome - 518400) * 0.37;
      }
    } else if (status === "married") {
      if (taxableIncome <= 19750) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome <= 80250) {
        tax = 1975 + (taxableIncome - 19750) * 0.12;
      } else if (taxableIncome <= 171050) {
        tax = 9235 + (taxableIncome - 80250) * 0.22;
      } else if (taxableIncome <= 326600) {
        tax = 29211 + (taxableIncome - 171050) * 0.24;
      } else if (taxableIncome <= 414700) {
        tax = 66543 + (taxableIncome - 326600) * 0.32;
      } else if (taxableIncome <= 622050) {
        tax = 94735 + (taxableIncome - 414700) * 0.35;
      } else {
        tax = 167307.5 + (taxableIncome - 622050) * 0.37;
      }
    } else if (status === "head") {
      if (taxableIncome <= 14100) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome <= 53700) {
        tax = 1410 + (taxableIncome - 14100) * 0.12;
      } else if (taxableIncome <= 85500) {
        tax = 6162 + (taxableIncome - 53700) * 0.22;
      } else if (taxableIncome <= 163300) {
        tax = 13158 + (taxableIncome - 85500) * 0.24;
      } else if (taxableIncome <= 207350) {
        tax = 31830 + (taxableIncome - 163300) * 0.32;
      } else if (taxableIncome <= 518400) {
        tax = 45926 + (taxableIncome - 207350) * 0.35;
      } else {
        tax = 154793.5 + (taxableIncome - 518400) * 0.37;
      }
    }

    document.getElementById(
      "us-result"
    ).innerText = `Estimated Tax: $${tax.toFixed(2)}`;
  });

  canadaTaxForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById("canada-income").value);
    const status = document.getElementById("canada-status").value;
    const deductions =
      parseFloat(document.getElementById("canada-deductions").value) || 0;

    const taxableIncome = income - deductions;
    let tax = 0;

    if (status === "single") {
      if (taxableIncome <= 48535) {
        tax = taxableIncome * 0.15;
      } else if (taxableIncome <= 97069) {
        tax = 7280.25 + (taxableIncome - 48535) * 0.205;
      } else if (taxableIncome <= 150473) {
        tax = 17229.72 + (taxableIncome - 97069) * 0.26;
      } else if (taxableIncome <= 214368) {
        tax = 31114.76 + (taxableIncome - 150473) * 0.29;
      } else {
        tax = 49644.31 + (taxableIncome - 214368) * 0.33;
      }
    } else if (status === "married") {
      if (taxableIncome <= 48535) {
        tax = taxableIncome * 0.15;
      } else if (taxableIncome <= 97069) {
        tax = 7280.25 + (taxableIncome - 48535) * 0.205;
      } else if (taxableIncome <= 150473) {
        tax = 17229.72 + (taxableIncome - 97069) * 0.26;
      } else if (taxableIncome <= 214368) {
        tax = 31114.76 + (taxableIncome - 150473) * 0.29;
      } else {
        tax = 49644.31 + (taxableIncome - 214368) * 0.33;
      }
    } else if (status === "head") {
      if (taxableIncome <= 48535) {
        tax = taxableIncome * 0.15;
      } else if (taxableIncome <= 97069) {
        tax = 7280.25 + (taxableIncome - 48535) * 0.205;
      } else if (taxableIncome <= 150473) {
        tax = 17229.72 + (taxableIncome - 97069) * 0.26;
      } else if (taxableIncome <= 214368) {
        tax = 31114.76 + (taxableIncome - 150473) * 0.29;
      } else {
        tax = 49644.31 + (taxableIncome - 214368) * 0.33;
      }
    }

    document.getElementById(
      "canada-result"
    ).innerText = `Estimated Tax: CAD$${tax.toFixed(2)}`;
  });
});
