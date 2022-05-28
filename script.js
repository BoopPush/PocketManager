const addExpense = document.getElementById("addExpense");
const addIncome = document.getElementById("addIncome");
const gifts = document.getElementById("gifts");
const salary = document.getElementById("salary");
const lottery = document.getElementById("lottery");
const clubs = document.getElementById("clubs");
const clothes = document.getElementById("clothes");
const food = document.getElementById("food");
const sport = document.getElementById("sport");
const eatingOut = document.getElementById("eatingOut");
const taxi = document.getElementById("taxi");
const months =["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

const monthInfo = document.getElementById("monthInfo");
let monthCounter = 0
monthInfo.innerHTML = months[monthCounter];
const nextMonth = document.getElementById("nextMonth");
const prevMonth = document.getElementById("prevMonth");

nextMonth.onclick = () =>{
    monthCounter++;
    if(monthCounter == months.length){
        monthCounter = 0;
    }
    monthInfo.innerHTML = months[monthCounter];
}

prevMonth.onclick = () =>{
    monthCounter--;
    if(monthCounter < 0){
        monthCounter = months.length -1;
    }
    monthInfo.innerHTML = months[monthCounter];
}










