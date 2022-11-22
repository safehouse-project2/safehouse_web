import React, { useContext, useEffect, useState } from 'react'
import { auth , db} from '../firebase'
import { useRouter } from 'next/router'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signInWithRedirect,
    onAuthStateChanged
} from 'firebase/auth'
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const provider = new GoogleAuthProvider();

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(name, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() =>{
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: "https://cdn.pixabay.com/photo/2019/12/30/09/49/heart-shape-frame-4729280_1280.jpg"
                })
                addDoc(collection(db, "users"), {
                    name: name,
                    email: email,
                    createdAt: serverTimestamp(),
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
                
          

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth.email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    async function googleLogin() {
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            setCurrentUser(user)
        } catch (message) {
            return console.log(message)
        }
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        googleLogin,
    }


    const router = useRouter()


    // useEffect(() => {
    //     if (auth) {
    //         router.push('/auth/login')
    //     } else {
    //         // stay in the same page
    //         console.log(auth)
    //     }
    // },[auth])
     return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
