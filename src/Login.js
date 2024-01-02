import React, { useState } from 'react'
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
        const signIn = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) =>{
                if (userCredential)
                Navigate("/");
            })
            .catch((error) => alert(error.message));
        };
        const register = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) =>{
                if (userCredential)
                Navigate("/");
            })
            .catch((error)=> {
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }

return (
    <div className='login'>
        <Link to="/">
        <img className='login__logo'
        src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
        </Link>
    
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                type='submit'
                onClick={signIn}
                className='login__signInButton'
                >
                    Sign In
            </button>
                
            </form>
            <p>
                By signinig-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please see our privacy Notice.Our Cookies Notice and our interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>
                Create your Amazon Account
            </button>
        </div>


    </div>
);
}

export default Login