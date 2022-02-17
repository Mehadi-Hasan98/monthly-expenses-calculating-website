function subAmount(num1,num2){
    let sub  = num1 - num2;
    return sub;
}
function percentageCalculate(amount,percent){
   var percentageAmount = amount *(percent/100);
   return percentageAmount;   
}


document.getElementById('calculate-button').addEventListener('click', function(){
    // income input field
    const incomeInput = document.getElementById('income-input');
    const income = parseFloat(incomeInput.value);
    // Food input field
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    // Rent input field
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    // Clothes input field
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    // Expense Total 
    const expenseTotal = document.getElementById('expense-total');
    expenseTotal.innerText = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);
    
    // Balance Total
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = income - expenseTotal.innerText;
      
})
    // save button action field
document.getElementById('saving-button').addEventListener('click', function(){
    // save field input
    const savingInput = document.getElementById('saving-input');
    const totalSaving = savingInput.value;
    const balanceTotal = document.getElementById('balance-total');
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const savingValue = document.getElementById('saving-value');
    // percentage calculation
    const savingAmount = income * (totalSaving / 100)
    const remainingBalance = document.getElementById('remaining-balance');
    savingValue.innerText = savingAmount;
    // Remaining Balance calculation
    remainingBalance.innerText = balanceTotal.innerText - savingAmount;
})