import React from 'react';
import user from '../assets/user.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex w-11/12 mx-auto justify-between items-center'>
            <div>

            </div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/career'>CAREER</NavLink>
                 
            </div>
            <div className='login-btn flex gap-3'>
                <img src={user} alt="" />
               <button className='btn btn-primary px-8'>Login</button>      
            </div>
        </div>
    );
};

export default Navbar;