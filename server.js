import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, push, get, child, ref, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


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

  const db = getDatabase();

  let r = ref(db);
  let b = ref(db);
  r = child(push(r), new Date().getTime().toString());

  set(r, {
        username: "dsf",
        email: "dsfsd",
        profile_picture : "fdsfdsf"
  })

  get(child(b, r.key)).then( snapshots => {
      for(let snapshot in snapshots.val()){
          alert(snapshots[snapshot]);
      }
  })

