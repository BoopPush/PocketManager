const addExpense = document.getElementById("addExpense");
const addIncome = document.getElementById("addIncome");
const gifts = document.getElementById("gifts");
const salary = document.getElementById("salary");
const clubs = document.getElementById("clubs");
const clothes = document.getElementById("clothes");
const food = document.getElementById("food");
const sport = document.getElementById("sport");
const eatingOut = document.getElementById("eatingOut");
const taxi = document.getElementById("taxi");
let expenses = [];
let incomes = [];

addExpense.onclick = () => {
    var select = document.getElementById("selectExpense");
    var selectValue = select.value;
    switch (selectValue) {
        case "Gifts":
            var val = document.getElementById("ammountExpense").value;
            gifts.innerHTML = "-" + val;
            showBalance(val,0);
            break;
        case "Sport":
            var val = document.getElementById("ammountExpense").value;
            sport.innerHTML = "-" + val;
            showBalance(val,0);
            break;
        case "Taxi":
            var val = document.getElementById("ammountExpense").value;
            taxi.innerHTML = "-" + val;
            showBalance(val,0);
            break;
        case "Eating out":
            var val = document.getElementById("ammountExpense").value;
            eatingOut.innerHTML = "-" + val;
            showBalance(val,0);
            break;
        case "Clubs":
            var val = document.getElementById("ammountExpense").value;
            clubs.innerHTML = "-" + val;
            showBalance(val,0);
            break;
        case "Clothes":
            var val = document.getElementById("ammountExpense").value;
            clothes.innerHTML = "-" + val;
            showBalance(val,0);
            break;


    }
}

addIncome.onclick = () => {
    var select = document.getElementById("selectIncome");
    var selectValue = select.value;
    switch (selectValue) {
        case "Salary":
            var val = document.getElementById("ammountIncome").value;
            salary.innerHTML = "+" + val;
            showBalance(0,val);
            break;
        case "Lottery":
            var val = document.getElementById("ammountIncome").value;
            showBalance(0,val)
            break;
    }
}

const balance = document.getElementById("balance");
function showBalance(val1,val2) {
    expenses.push(val1);
    incomes.push(val2);
    let expenseResult = 0;
    let incomeResult = 0;
    expenses.forEach(element => {
        expenseResult += element;
    });
    incomes.forEach(element => {
        incomeResult += element;
    });
    var result = incomeResult - expenseResult;
    console.log(result);
    if (result < 0) {
        balance.innerHTML = "Total balance: " + result;
    }
    else if (result > 0) {
        balance.innerHTML = "Total balance: +" + result;
    }
}










