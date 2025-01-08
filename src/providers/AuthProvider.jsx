import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User:', currentUser)
            setUser(currentUser);
            setLoading(false);
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
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;