import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const name = 'tusher bhakta anta';

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User:', currentUser)
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }

    },[])

    
    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('currently loged in user', currentUser)
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('currently no user loged in')
    //         setUser(null);
    //     }
    // })

    const authInfo = {
        name,
        user,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;