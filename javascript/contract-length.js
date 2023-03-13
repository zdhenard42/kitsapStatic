const twelveMonthLabel = document.querySelector('label[for="option1"]');
const twentyFourMonthLabel = document.querySelector('label[for="option2"]');
const fastPlanPrice = document.querySelector('.plan-box:nth-of-type(2) .price .amount');
const fastestPlanPrice = document.querySelector('.plan-box:nth-of-type(4) .price .amount');
const fastPlanSetupPrice = document.querySelector('.plan-box:nth-of-type(2) ul li:first-of-type');
const fastestPlanSetupPrice = document.querySelector('.plan-box:nth-of-type(4) ul li:first-of-type');

twentyFourMonthLabel.addEventListener('click', function() {
  fastPlanPrice.textContent = (Number(fastPlanPrice.textContent) - 24).toFixed(2);
  fastestPlanPrice.textContent = (Number(fastestPlanPrice.textContent) - 50).toFixed(2);
  fastPlanSetupPrice.textContent = ("$400 Setup*");
  fastestPlanSetupPrice.textContent = ("$400 Setup*");
});

twelveMonthLabel.addEventListener('click', function() {
  fastPlanPrice.textContent = "149.99";
  fastestPlanPrice.textContent = "249.99";
  fastPlanSetupPrice.textContent = ("$500 Setup*");
  fastestPlanSetupPrice.textContent = ("$500 Setup*");
});

