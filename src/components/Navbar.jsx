import React, { use } from 'react';
import user from '../assets/user.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logout}=use(AuthContext)
    const handleLogout =()=>{
        logout()
        .then(() => {
            alert('logged-out')
        })
        .catch((error) => {
            console.log(error)
});
    }
    return (
        <div className='flex w-11/12 mx-auto justify-between items-center'>
            <div>
               {user && user.email}
            </div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/career'>CAREER</NavLink>
                 
            </div>
            <div className='login-btn flex gap-3'>
                <img src={user} alt="" />
                {
                    user?<button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button>:
                                    <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>      

                }
            </div>
        </div>
    ); 
};

export default Navbar;