import Firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';
 

const config = {
    apiKey: "AIzaSyAprTTpuiC--kkxtmxZdhCXkoX0sFYa0XQ",
    authDomain: "netflix-clone-dc8bd.firebaseapp.com",
    projectId: "netflix-clone-dc8bd",
    storageBucket: "netflix-clone-dc8bd.appspot.com",
    messagingSenderId: "279223468168",
    appId: "1:279223468168:web:ad67b95d1111abb9481f3d"
};

const firebase = Firebase.initializeApp(config);



export { firebase }; 
