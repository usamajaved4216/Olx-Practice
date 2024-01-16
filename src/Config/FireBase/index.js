import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDNm1iXlzJezANtXytGRwes4yGxP2h9ztg",
  authDomain: "olx-app-13128.firebaseapp.com",
  projectId: "olx-app-13128",
  storageBucket: "olx-app-13128.appspot.com",
  messagingSenderId: "94648987534",
  appId: "1:94648987534:web:4d7501da3a7e0c0f763edf",
  measurementId: "G-CKSY3GF4P5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const SignUp = (userInfo) => {
  const { email, password } = userInfo

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      alert('successfully')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage)
    });

}

const login = async (userInfo) => {

  try {
    const { email, password } = userInfo

    return await signInWithEmailAndPassword(auth, email, password).then(res => {
      console.log("🚀 ~ returnawaitsignInWithEmailAndPassword ~ res:", res)
      alert('looged i successfully')
      return res

    })
  } catch (e) {
    alert(e.message)
    return e

  }
}




export {
  SignUp,
  login
}
