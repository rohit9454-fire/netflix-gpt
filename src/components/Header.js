import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const SignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")

        });
    }
    return (
        <>
            <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between w-screen'>
                <img className='w-44' alt={'logo'} src={'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'} />

                {user && <div className='flex items-center'>
                    <div className='h-20 w-24 cursor-pointer'>
                        <img className='w-12 h-12 mx-5' alt={'logo'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/User_icon_1.svg/2048px-User_icon_1.svg.png'} />
                        <p className='text-white text-center'>{user?.displayName}</p>
                    </div>

                    <button className='text-white cursor-pointer' onClick={SignOut}>Sign Out</button>
                </div>}
            </div>
        </>
    )
}

export default Header