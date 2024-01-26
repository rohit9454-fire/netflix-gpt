import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src={'https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg'} alt={'background img'} />
            </div>

            <form className='p-12 w-3/12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-semibold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />)}
                <input type='text' placeholder='Email or phone number' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />
                <input type='password' placeholder='Password' className='p-3 my-4 w-full border border-gray-400 rounded bg-transparent placeholder-gray-400' />
                <button className='px-2 py-3 my-6 bg-red-700 w-full rounded z-50'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='text-sm font-light cursor-pointer' onClick={() => toggleSignInForm()}>
                    {isSignInForm ? 'New to Netflix? Sign up now.' : 'Already registered? Sign In Now'}
                </p>
            </form>


        </div>
    )
}

export default Login