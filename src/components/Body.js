import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Redux/userSlice';



const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                const { uid, email } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                }))
            } else {
                dispatch(removeUser())
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body