import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createAcWithEmailPw = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
            // Profile updated!
            // ...
            })
            .catch((error) => {
                setError(error.message)
            });
          
    }

    const verifyUserEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
          });
    }, [])

    return {
        user,
        error,
        logInUsingGoogle,
        logOut,
        createAcWithEmailPw,
        logInWithEmailAndPassword,
        updateUserProfile,
        verifyUserEmail,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        updateUserProfile,
        verifyUserEmail

    }
}

export default useFirebase;