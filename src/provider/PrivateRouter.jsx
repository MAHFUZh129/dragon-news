import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRouter = ({children}) => {
    const {user,load}= use(AuthContext)
    const location =useLocation()
    // console.log(location)
    // console.log(user)
    if(load){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children
    }
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>

    
};

export default PrivateRouter;