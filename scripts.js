const monthlyPrices = [100, 200, 500, 700];
const yearlyPrices = [1000, 2000, 5000, 7000];

const selectButtons = document.querySelectorAll('.select-plan');
const swapButton = document.getElementById('swap-button');

selectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const selectedMonthlyPrice = monthlyPrices[index];
        const selectedYearlyPrice = yearlyPrices[index];

        alert(`You've selected the ${button.parentElement.querySelector('h2').textContent} plan!\n\nMonthly Price: ${selectedMonthlyPrice} INR\nYearly Price: ${selectedYearlyPrice} INR`);
    });
});

swapButton.addEventListener('click', () => {
    monthlyPrices.forEach((monthlyPrice, index) => {
        const yearlyPrice = yearlyPrices[index];

        monthlyPrices[index] = yearlyPrice;
        yearlyPrices[index] = monthlyPrice;

        // Swap the data attributes
        selectButtons[index].dataset.monthly = yearlyPrice;
        selectButtons[index].dataset.yearly = monthlyPrice;
    });

    // Update plan details on the screen
    updatePlanDetails();

    alert('Swapped Monthly and Yearly prices for all plans.');
});

function updatePlanDetails() {
    const planElements = document.querySelectorAll('.plan');

    planElements.forEach((planElement, index) => {
        const monthlyPriceElement = planElement.querySelector('[data-type="monthly"]');
        const yearlyPriceElement = planElement.querySelector('[data-type="yearly"]');
        const monthlyPrice = monthlyPrices[index];
        const yearlyPrice = yearlyPrices[index];

        monthlyPriceElement.textContent = `Monthly Price: ${monthlyPrice} INR`;
        yearlyPriceElement.textContent = `Yearly Price: ${yearlyPrice} INR`;
    });
}

const toggleButton = document.querySelector('.toggle-button');
const monthlyButton = document.getElementById('monthly-button');
const yearlyButton = document.getElementById('yearly-button');
const plansContainer = document.querySelector('.plans');
// Initial update
updatePlans();


const cancelPlanButton = document.getElementById('cancel-plan');
const changePlanButton = document.getElementById('change-plan');

cancelPlanButton.addEventListener('click', () => {
    // Implement cancellation logic here
    alert('Plan has been canceled.');
});

changePlanButton.addEventListener('click', () => {
    // Redirect to the plan selection page or implement change plan logic
    window.location.href = 'plan-selection.html'; // Replace with the appropriate URL
});
const cancelPlanLink = document.getElementById('cancel-plan');

cancelPlanLink.addEventListener('click', () => {
    const confirmation = window.confirm('Are you sure you want to cancel your plan? This action cannot be undone.');
    
    if (confirmation) {
        // Implement cancellation logic here
        // You can make an API call to the backend to cancel the plan
        // For demonstration purposes, let's display an alert
        alert('Plan has been canceled.');
    }
});
