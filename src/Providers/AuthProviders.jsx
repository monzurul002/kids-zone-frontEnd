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

    const profileUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name

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
            setLoading(false)
            setUser(currUser)
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