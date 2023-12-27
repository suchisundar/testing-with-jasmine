window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function setupInitialValues() {
  const values = { amount: 25000, years: 7, rate: 5 };
  const amountPrincipal = document.getElementById("loan-amount");
  amountPrincipal.value = values.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = values.years;
  const rate = document.getElementById("loan-rate");
  rate.value = values.rate;
  update();
}

function update() {
  const currentPaymentValues = getCurrentPaymentValues();
  updateMonthly(calculateMonthlyPayment(currentPaymentValues));
}

function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}

function getCurrentPaymentValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}




