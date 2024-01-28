import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Redux/userSlice';
import { toggleGptSearchView } from '../utils/Redux/gptSlice'
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from '../utils/constant';
import { changeLanguage } from '../utils/Redux/configSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(state => state.gpt?.showGptSearch)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName
                }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        // Here we unmounting 
        return () => unsubscribe();
    }, [])

    const SignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error", { error: error })
        });
    }

    const handleGPTClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageSelection = (e) => {
        dispatch(changeLanguage(e.target?.value))
    }

    return (
        <>
            <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between w-screen'>
                <img className='w-44 mx-auto md:mx-0' alt={'logo'} src={LOGO} />

                {user && <div className='flex items-center'>
                    {showGptSearch ? <select onChange={handleLanguageSelection} className='md:px-4 px-2 md:py-2 py-1 md:m-2 m-1 bg-purple-600 text-white rounded-lg text-sm md:text-lg'>
                        {SUPPORTED_LANGUAGES.map((item) => <option key={item?.identifire} value={item?.identifire}>{item?.name}</option>)}
                    </select> : null}
                    <button onClick={handleGPTClick} className='md:px-4 px-2 md:py-2 py-1 md:m-2 m-1 bg-purple-600 text-white rounded-lg text-sm md:text-lg cursor-pointer'>{!showGptSearch ? 'GPT Search' : 'Home'}</button>
                    <div className='md:h-24 h-12 md:w-24 w-12 cursor-pointer ml-28 md:ml-0'>
                        <img className='md:w-12 w-6 md:h-12 h-6 md:mx-7 mx-3 md:my-1 my-0' alt={'logo'} src={USER_LOGO} />
                        <p className='text-white text-center md:text-lg text-xs'>{user?.displayName}</p>
                    </div>
                    <button className='text-white cursor-pointer md:text-lg text-xs  ml-2' onClick={SignOut}>Sign Out</button>
                </div>}
            </div>
        </>
    )
}

export default Header