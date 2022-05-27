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

addExpense.onclick = () => {
    var select = document.getElementById("selectExpense");
    var selectValue = select.value;
    switch (selectValue) {
        case "Gifts":
            var val = document.getElementById("ammountExpense").value;
            gifts.innerHTML = "-"+val;
            break;
        case "Sport":
            var val = document.getElementById("ammountExpense").value;
            sport.innerHTML = "-"+val;
            break;
        case "Taxi":
            var val = document.getElementById("ammountExpense").value;
            taxi.innerHTML = "-"+val;
            break;
        case "Eating out":
            var val = document.getElementById("ammountExpense").value;
            eatingOut.innerHTML = "-"+val;
            break;
        case "Clubs":
            var val = document.getElementById("ammountExpense").value;
            clubs.innerHTML = "-"+val;
            break;
        case "Clothes":
            var val = document.getElementById("ammountExpense").value;
            clothes.innerHTML = "-"+val;
            break;


    }
}