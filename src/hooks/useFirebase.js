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
            // .then(result => {
            //     setUser(result.user);
            // })
            // .catch(error => {
            //     setError(error.message);
            // })
            // .finally(() => {
            //     setIsLoading(false);
            // })
    }

    const createAcWithEmailPw = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // setUser(user);
                console.log(user);
                setError('');
                updateUserProfile(name);
                verifyUserEmail();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const logInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
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
        setIsLoading
    }
}

export default useFirebase;