import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,

} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../helper/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      // console.log(userCredential);
      navigate("/");
  toastSuccess("Registered Successfull!")
    } catch (error) {
      console.log(error);
      toastError(error.message)
  
    }
  };
  const signIn = async (email,password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toastSuccess("Logged in Successfull!")
    } catch (error) {
      toastError(error.message)
    }
  };


const userObserver = ()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
   const {email,displayName,photoURL}
 = user
 setCurrentUser({email,displayName,photoURL})
    } else {
      setCurrentUser(false);
    }
  });

}

const logOut = ()=>{
signOut(auth)
toastSuccess("Logged out successfully");
}

const signUpProvider = () => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
  
      navigate("/");
      toastSuccess("Logged in successfull");
    })
    .catch((error) => {
 
      console.log(error);
    });
};

const forgotPassword = (email) =>{

  sendPasswordResetEmail(auth,email).then(()=>{
    toastSuccess("Please check your email");

  }).catch((error)=>{
    toastError(error.message);
  })
}

const values = {
  createUser,
  signIn,
  logOut,
  currentUser,
  signUpProvider,
  forgotPassword,
};

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
