document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;

    const foodInput = document.getElementById('food-input');
    const foodCost = foodInput.value;
   
    const rentInput = document.getElementById('rent-input');
    const rentCost = rentInput.value;
   
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = clothesInput.value;

    const expenseTotal = document.getElementById('expense-total');
    expenseTotal.innerText = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);

    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = income - expenseTotal.innerText;
      
})

document.getElementById('saving-button').addEventListener('click', function(){
    const savingInput = document.getElementById('saving-input');
    const totalSaving = savingInput.value;
    const balanceTotal = document.getElementById('balance-total');
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const savingValue = document.getElementById('saving-value');
    const savingAmount = income * (totalSaving / 100)
    const remainingBalance = document.getElementById('remaining-balance');
    savingValue.innerText = savingAmount;

    remainingBalance.innerText = balanceTotal.innerText - savingAmount;
})