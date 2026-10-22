let totalIncome = 0;
let totalExpenses = 0;

function setIncome() {
    const incomeInput = document.getElementById('income-input').value;
    if (incomeInput === '' || incomeInput <= 0) {
        alert('Masukkan jumlah pemasukan yang valid!');
        return;
    }
    totalIncome = parseFloat(incomeInput);
    document.getElementById('total-budget').innerText = totalIncome;
    updateBalance();
}

function addExpense() {
    const nameInput = document.getElementById('expense-name').value;
    const amountInput = document.getElementById('expense-amount').value;

    if (nameInput === '' || amountInput === '' || amountInput <= 0) {
        alert('Mohon isi nama dan jumlah pengeluaran dengan benar!');
        return;
    }

    const amount = parseFloat(amountInput);
    totalExpenses += amount;

    const ul = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.innerHTML = `<span>${nameInput}</span> <span>Rs. ${amount}</span>`;
    ul.appendChild(li);

    updateBalance();
    
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}

function updateBalance() {
    const currentBalance = totalIncome - totalExpenses;
    document.getElementById('balance').innerText = currentBalance;
}