import React from 'react';
import auth from '../firebase_init'
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../hook/useAdmin';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const RequireAdmin = ({children}) => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const [admin, admining] = useAdmin(user)

    if(loading || admining){
        return <Loading />
    }
    if(!admin){
        toast.error("You are not a admin")
        localStorage.removeItem('accessToken')
        signOut(auth)
        return navigate('/login')
    }

    return children
};

export default RequireAdmin;