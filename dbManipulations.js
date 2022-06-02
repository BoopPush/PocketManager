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
  // let validation = document.getElementsByClassName("validationT")[0];
  // if (amount == "") {
  //   validation.textContent = "empty field";
  //   return;
  // }
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
  // let validation = document.getElementsByClassName("validationT")[0];
  // if (amount == "") {
  //   validation.textContent = "empty field";
  //   return;
  // }
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

  let incomes = [];
  let expenses = [];
  transactions.forEach((transaction) => {
    switch (transaction.data.category) {
      case "Salary":
        let val = transaction.data.amount;
        salary.innerHTML = "+" + val;
        incomes.push(Number(val));
        break;
      case "Lottery":
        let valL = transaction.data.amount;
        lottery.innerHTML = "+" + valL;
        incomes.push(Number(valL));
        break;
      case "Gifts":
        let valG = transaction.data.amount;
        gifts.innerHTML = "-" + valG;
        expenses.push(Number(valG));
        break;
      case "Clubs":
        let valC = transaction.data.amount;
        clubs.innerHTML = "-" + valC;
        expenses.push(Number(valC));
        break;
      case "Clothes":
        let valCl = transaction.data.amount;
        clothes.innerHTML = "-" + valCl;
        expenses.push(Number(valCl));
        break;
      case "Food":
        let valF = transaction.data.amount;
        food.innerHTML = "-" + valF;
        expenses.push(Number(valF));
        break;
      case "Sport":
        let valSp = transaction.data.amount;
        sport.innerHTML = "-" + valSp;
        expenses.push(Number(valSp));
        break;
     case "Eating out":
        let valE = transaction.data.amount;
        eatingOut.innerHTML = "-" + valE;
        expenses.push(Number(valE));
        break; 
      case "Taxi":
        let valT = transaction.data.amount;
        taxi.innerHTML = "-" + valT;
        expenses.push(Number(valT));
        break;
    }
  });
  
  showBalance(incomes,expenses);

  function showBalance(incomes, expenses) {
    const balance = document.getElementById("balance");
    
    let expenseResult = 0;
    let incomeResult = 0;
    expenses.forEach(element => {
      expenseResult += element;
    });
    incomes.forEach(element => {
      incomeResult += element;
    });
    let result = incomeResult - expenseResult;
    if (result < 0) {
      balance.innerHTML = "Total balance: " + result;
    }
    else if (result > 0) {
      balance.innerHTML = "Total balance: +" + result;
    }
  }
}
render();