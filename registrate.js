import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDMuiVXTEufrF5WlXFRU_Ty6l_oexLgYAo",
    authDomain: "pocketmanager-447dd.firebaseapp.com",
    projectId: "pocketmanager-447dd",
    storageBucket: "pocketmanager-447dd.appspot.com",
    messagingSenderId: "109999395890",
    appId: "1:109999395890:web:ff6b8fc9d01bdfe81a982b",
    measurementId: "G-8CKB0VB5L0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let submit = document.getElementById("btn-auth");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.getElementById("email-auth").value;
  let password = document.getElementById("password-auth").value;
  let validation = document.getElementsByClassName("validation1")[0];
  if (username == "" || password == "") {
    validation.textContent = "empty fields";
    return;
  }
  createUserWithEmailAndPassword(auth, username, password)
    .then((userCredentials) => {
      location.href = "#close";
      alert("You are signed up!");
    })
    .catch((error) => {
      validation.textContent = error.code;
    });
});