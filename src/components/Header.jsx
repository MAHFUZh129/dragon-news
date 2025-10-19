import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center gap-3 items-center flex-col'>
            <img className='w-96' src={logo} alt="" />
            <h3 className='text-accent'>Journalism Without Fear or Favour</h3>
            <p>{format(new Date(),"EEEE, LLLL dd,y")}</p>
        </div>
    );
};

export default Header;