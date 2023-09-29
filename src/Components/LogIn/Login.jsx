import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firsebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [performer,setPerformer] = useState()
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    

    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
           const user = result.user;
           console.log(user)
           setPerformer(user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result => {
            console.log(result)
            setPerformer(null)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            setPerformer(result.user)
        })

        .catch(error =>{
            console.log(error.message)
        })
    }


    return (
        <div>
            <h1>Log In Page</h1>

            {
                performer? 
                <button onClick={handleSignOut}>Sign Out</button> :
                <div>
                    <button onClick={handleGoogleSignIn}>Google Log In</button>
                    <button onClick={handleGithubSignIn}>GitHub Log In</button>
                </div>
            }

            {performer && <div>
                <h1>User: {performer.displayName}</h1>
                <h3>User Email : {performer.email}</h3>
                <img src={performer.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;