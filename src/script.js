// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carType = document.getElementById('carType');
    const carValue = document.getElementById('carValue');
    const carValueRange = document.getElementById('carValueRange');
    const leasePeriod = document.getElementById('leasePeriod');
    const leasePeriodRange = document.getElementById('leasePeriodRange');
    const downPayment = document.getElementById('downPayment');
    const downPaymentDisplay = document.getElementById('downPaymentDisplay');

    const leasingCostDisplay = document.getElementById('leasingCost');
    const downPaymentAmountDisplay = document.getElementById('downPaymentAmount');
    const downPaymentPercentDisplay = document.getElementById('downPaymentPercent');
    const monthlyInstallmentDisplay = document.getElementById('monthlyInstallment');
    const interestRateDisplay = document.getElementById('interestRate');

    const updateValues = () => {
        const carValueNum = parseFloat(carValue.value);
        const leasePeriodNum = parseInt(leasePeriod.value);
        const downPaymentPercent = parseInt(downPayment.value);
        const isNewCar = carType.value === 'new';
        const interestRate = isNewCar ? 2.99 : 3.7;

        const downPaymentAmount = (carValueNum * downPaymentPercent) / 100;
        const leasingCost = carValueNum - downPaymentAmount;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const monthlyInstallment = leasingCost * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, leasePeriodNum)) / (Math.pow(1 + monthlyInterestRate, leasePeriodNum) - 1);

        leasingCostDisplay.textContent = leasingCost.toFixed(2);
        downPaymentAmountDisplay.textContent = downPaymentAmount.toFixed(2);
        downPaymentPercentDisplay.textContent = downPaymentPercent;
        monthlyInstallmentDisplay.textContent = monthlyInstallment.toFixed(2);
        interestRateDisplay.textContent = interestRate.toFixed(2);
    };

    carValue.addEventListener('input', () => {
        carValueRange.value = carValue.value;
        updateValues();
    });

    carValueRange.addEventListener('input', () => {
        carValue.value = carValueRange.value;
        updateValues();
    });

    leasePeriod.addEventListener('input', () => {
        leasePeriodRange.value = leasePeriod.value;
        updateValues();
    });

    leasePeriodRange.addEventListener('input', () => {
        leasePeriod.value = leasePeriodRange.value;
        updateValues();
    });

    downPayment.addEventListener('input', () => {
        downPaymentDisplay.textContent = `${downPayment.value}%`;
        updateValues();
    });

    carType.addEventListener('change', updateValues);

    updateValues(); // Initial calculation on page load
});
