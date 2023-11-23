import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("");
    const provider = new GoogleAuthProvider()
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, selectImage) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: selectImage

        })
    }


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        loading,
        createNewUser,
        emailPasswordSignIn,
        googleSignIn,
        user,
        logOut,
        profileUpdate

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
            setLoading(false)


            if (currUser && currUser?.email) {
                const loggedUser = {
                    email: currUser?.email
                }
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data?.token)
                    })
            }
            else {
                localStorage.removeItem("token")
            }

        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;