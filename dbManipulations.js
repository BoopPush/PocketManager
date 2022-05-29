import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
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
const firebaseConfig = {
  apiKey: "AIzaSyBND3ipRWjDS77DRoiljGIJE9A8WWibqxk",

  authDomain: "fintrack-stomello4ek.firebaseapp.com",

  projectId: "fintrack-stomello4ek",

  storageBucket: "fintrack-stomello4ek.appspot.com",

  messagingSenderId: "904770796483",

  appId: "1:904770796483:web:b9bdaefc1f31fa3b555b76",
};

//addTransaction
const db = getFirestore();
const auth = getAuth();

let submit = document.getElementById("addIncome");

submit.addEventListener("click", async function (event) {
  event.preventDefault();

  let amount = Number(document.getElementById("ammountIncome").value);
  document.getElementById("ammountIncome").value = "";
  let validation = document.getElementsByClassName("validationT")[0];
  if (amount == "") {
    validation.textContent = "empty field";
    return;
  }
  let category = document.getElementById("selectIncome").value;

  async function getString() {
    try {
      const docRef = await addDoc(collection(db, "transaction"), {
        amount: amount,
        category: category,
        userID: auth.currentUser.uid
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  getString().then(() => {
    render();
    location.href = "#close";
  });
});

let submitExp = document.getElementById("addExpense");

submitExp.addEventListener("click", async function (event) {
  event.preventDefault();

  let amount = Number(document.getElementById("ammountExpense").value);
  document.getElementById("ammountExpense").value = "";
  let validation = document.getElementsByClassName("validationT")[0];
  if (amount == "") {
    validation.textContent = "empty field";
    return;
  }
  let category = document.getElementById("selectExpense").value;
  console.log(category);

  async function getString() {
    try {
      const docRef = await addDoc(collection(db, "transaction"), {
        amount: amount,
        category: category,
        userID: auth.currentUser.uid
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  getString().then(() => {
    render();
    location.href = "#close";
  });
});

async function render() {
  let transactions = [];

  const querySnapshot = await getDocs(collection(db, "transaction"));
  console.log(auth.currentUser.uid);
  querySnapshot.forEach((doc) => {
    if (auth.currentUser.uid != doc.data().userID) return;
    const obj = {
      id: doc.id,
      data: doc.data(),
    };
    transactions.push(obj);
  });
  console.log(transactions)
  let resultS = 0;
  let resultL = 0;
  let resultG = 0;
  let resultC = 0;
  let resultCl = 0;
  let resultF = 0;
  let resultSp = 0;
  let resultE = 0;
  let resultT = 0;




  let incomes = [];
  let expenses = [];
  transactions.forEach((transaction) => {
    console.log("forEach");
    switch (transaction.data.category) {
      case "Salary":
        console.log("s");
        let val = transaction.data.amount;
        resultS += Number(val);
        salary.innerHTML = "+" + resultS;
        showBalance(0, Number(val), incomes, expenses);
        break;
      case "Lottery":
        let valL = transaction.data.amount;
        resultL += Number(valL);
        lottery.innerHTML = "+" + resultL;
        showBalance(0, Number(valL),incomes,expenses);
        break;
      case "Gifts":
        let valG = transaction.data.amount;
        resultG += Number(valG);
        gifts.innerHTML = "-" + resultG;
        showBalance(Number(valG), 0, incomes, expenses);
        break;
      case "Clubs":
        let valC = transaction.data.amount;
        resultCl += Number(valC);
        clubs.innerHTML = "-" + resultCl;
        showBalance(Number(valC), 0, incomes, expenses);
        break;
      case "Clothes":
        let valCl = transaction.data.amount;
        resultC += Number(valCl);
        clothes.innerHTML = "-" + resultC;
        showBalance(Number(valCl), 0, incomes, expenses);
        break;
      case "Food":
        let valF = transaction.data.amount;
        resultF += Number(valF);
        food.innerHTML = "-" + resultF;
        showBalance(Number(valF), 0, incomes, expenses);
        break;
      case "Sport":
        let valSp = transaction.data.amount;
        resultSp += Number(valSp);
        sport.innerHTML = "-" + resultSp;
        showBalance(Number(valSp), 0, incomes, expenses);
        break;
     case "Eating out":
        let valE = transaction.data.amount;
        resultE += Number(valE);
        eatingOut.innerHTML = "-" + resultE;
        showBalance(Number(valE), 0, incomes, expenses);
        break; 
      case "Taxi":
        let valT = transaction.data.amount;
        resultT += Number(valT);
        taxi.innerHTML = "-" + resultT;
        showBalance(Number(valT), 0, incomes, expenses);
        break;
    }
  });


  function showBalance(val1, val2, incomes, expenses) {
    const balance = document.getElementById("balance");
    if (val1 == 0) {
      incomes.push(val2);
    }
    else if (val2 == 0) {
      expenses.push(val1);
    }

    let expenseResult = 0;
    let incomeResult = 0;
    expenses.forEach(element => {
      expenseResult += element;
    });
    incomes.forEach(element => {
      incomeResult += element;
    });
    console.log(incomes);
    let result = incomeResult - expenseResult;
    //console.log(result);
    if (result < 0) {
      balance.innerHTML = "Total balance: " + result;
    }
    else if (result > 0) {
      balance.innerHTML = "Total balance: +" + result;
    }
  }
}
render();