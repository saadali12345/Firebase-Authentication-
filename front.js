import { onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
     console.log(uid);
    } else {
     window.location='index.html'
    }
  });