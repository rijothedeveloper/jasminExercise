window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
//let values = {};
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  //values = getCurrentUIValues();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const payment = calculateMonthlyPayment(values);
  document.getElementById("monthly-payment").innerText = payment;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // return (values.amount * (values.rate / 12)) / (1 - Math.pow( (1 + (values.rate / 12)), (values.years * -1) ));
  const a = values.amount;
  const r = (values.rate / 10)/12;
  const n = values.years * 12;
  const pay =  a / (((Math.pow((1+r),n) - 1)) / (Math.pow((1+r),n) * r));
  return parseInt(pay.toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
