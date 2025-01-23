document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById('expense-form')
    const expenseNameInput = document.getElementById('expense-name')
    const expenseAmountInput = document.getElementById('expense-amount')
    const expenseList = document.getElementById('expense-list')
    const totalAmount = document.getElementById('total-amount')

    let expenses = JSON.parse(localStorage.getItem("storedExpenses")) || [];

    function updateExpense(){
        expenseList.innerHTML = ""

        let total = 0

        expenses.forEach(expense => {
            const li = document.createElement('li')
            li.innerHTML = `
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `

            expenseList.appendChild(li)
            total += parseFloat(expense.amount)
        })

        totalAmount.textContent = total.toFixed(2)
    }

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const expenseName = expenseNameInput.value;
        const expenseAmount = expenseAmountInput.value;

        const expense = {
            id: Date.now(),
            name: expenseName,
            amount: expenseAmount
        }

        expenses.push(expense)
        saveExpenses()
        updateExpense()

        // Clear input fields after adding an expense
        expenseNameInput.value = ''
        expenseAmountInput.value = ''
    })

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const deletedItemId = parseInt(e.target.getAttribute('data-id'), 10)

            // Find index of the expense with the matching id
            const index = expenses.findIndex(expense => expense.id === deletedItemId)

            if (index !== -1) {
                expenses.splice(index, 1)  // Remove the item at the found index
                saveExpenses()
                updateExpense()
            }
        }
    })

    function saveExpenses() {
        localStorage.setItem("storedExpenses", JSON.stringify(expenses))
    }

    updateExpense()
})
