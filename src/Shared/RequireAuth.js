import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase_init'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading />
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace />;
    }
    
    return children
};

export default RequireAuth;