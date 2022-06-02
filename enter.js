import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

let submit = document.getElementById("btn-enter");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.getElementById("email-enter").value;
  let password = document.getElementById("password-enter").value;
  let validation = document.getElementsByClassName("validation")[0];
  if (username == "" || password == "") {
    validation.textContent = "empty fields";
    return;
  }
  signInWithEmailAndPassword(auth, username, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      document.getElementById("email-enter").textContent = "";
      document.getElementById("password-enter").textContent = "";
      validation.textContent = "";
      location.href = "#close";
    })
    .catch((error) => {
      validation.textContent = error.code;
    });
});