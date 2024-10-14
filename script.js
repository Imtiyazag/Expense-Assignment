let expenses = [];

function addExpense() {
    const text = document.getElementById('expenseText').value;
    const amount = document.getElementById('expenseAmount').value;

    if (text === "" || amount === "") {
        alert("Please fill out both fields.");
        return;
    }

    const expense = {
        id: Date.now(),
        text: text,
        amount: Number(amount)
    };

    expenses.push(expense);
    renderExpenses();
    clearForm();
}

function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.text} - $${expense.amount}
            <div>
                <button class="edit-btn" onclick="editExpense(${expense.id})">Edit</button>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
            </div>
        `;
        expenseList.appendChild(li);
    });
}

function editExpense(id) {
    const expense = expenses.find(expense => expense.id === id);
    document.getElementById('expenseText').value = expense.text;
    document.getElementById('expenseAmount').value = expense.amount;
    
    deleteExpense(id);  // Remove the old version, re-add on save
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
}

function clearForm() {
    document.getElementById('expenseText').value = '';
    document.getElementById('expenseAmount').value = '';
}
