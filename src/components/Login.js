import React, { useRef, useState } from 'react';
import Header from './Header';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { CheckValidateData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/Redux/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null)
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMesssage] = useState('')

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleClickButton = () => {
        // validate the form data 

        const message = CheckValidateData(email?.current?.value, password?.current?.value, name?.current?.value, isSignInForm)
        setErrorMesssage(message)
        if (message) return;

        if (!isSignInForm) {
            //signUp Logic
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value).
                then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(user, { displayName: name?.current?.value })
                        .then(() => {
                            const { uid, email, displayName } = auth?.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName
                            }))
                            navigate("/browse")

                        }).catch((error) => {
                            setErrorMesssage(error.message)
                        })

                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMesssage(errorCode + "-" + errorMessage);
                    console.log(errorCode + '  Error ', errorMessage);
                });
        } else if (isSignInForm) {
            //signIn Logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value).
                then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse")
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMesssage(errorCode + "-" + errorMessage);
                    console.log(errorCode + '  Error ', errorMessage);
                })
        }



        //SignIn or SignUp if valid is null only

    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src={'https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg'} alt={'background img'} />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='p-12 w-3/12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-semibold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />)}
                <input type='text' ref={email} placeholder='Email or phone number' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />
                <input type='password' ref={password} placeholder='Password' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />
                {<p className='text-red-500 text-lg py-2 font-bold'>{errorMessage}</p>}
                <button className='px-2 py-3 my-6 bg-red-700 w-full rounded z-50' onClick={handleClickButton}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-sm font-light cursor-pointer' onClick={() => toggleSignInForm()}>
                    {isSignInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign In Now'}
                </p>
            </form>


        </div>
    )
}

export default Login