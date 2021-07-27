import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from './firebase'
import { createUser } from './db'


const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>
}

const formatUser = (user) => {
    return {
        uid: user.user.uid,
        email: user.user.email,
        name: user.user.displayName,
        photoUrl: user.user.providerData[0].photoURL,
        provider: user.user.providerData[0].providerId
    }
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);


    const handleUser = (rawUser) => {

        if (rawUser) {
            const user = formatUser(rawUser)

            createUser(user.uid, user)
            setUser(user)
            return user
        }
        else {
            setUser(false)
            return false
        }

    }

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider)
            .then((response) => { handleUser(response) });
    };


    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then((response) => { handleUser(response) });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);




    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.


    // Return the user object and auth methods
    return {
        user,
        signinWithGithub,
        signout,
    };
}

