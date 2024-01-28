import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Redux/userSlice';
import { LOGO, USER_LOGO } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)


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
    return (
        <>
            <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between w-screen'>
                <img className='w-44' alt={'logo'} src={LOGO} />

                {user && <div className='flex items-center'>
                    <div className='h-20 w-24 cursor-pointer'>
                        <img className='w-12 h-12 mx-5' alt={'logo'} src={USER_LOGO} />
                        <p className='text-white text-center'>{user?.displayName}</p>
                    </div>

                    <button className='text-white cursor-pointer' onClick={SignOut}>Sign Out</button>
                </div>}
            </div>
        </>
    )
}

export default Header