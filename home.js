import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";



const form= document.querySelector('#form');
const email= document.querySelector('#email');
const password= document.querySelector('#password');


form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
   console.log(user);
   window.location='home.html'
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });

    const logout= document.querySelector('.btn')
    signOut(auth).then(() => {
    console.log('logout successfully');
    window.location='index.html'
      }).catch((error) => {
        console.log (error);
      });
})