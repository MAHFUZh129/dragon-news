import React from 'react';
import classr from '../assets/class.png';
import play from '../assets/playground.png';
import swim from '../assets/swimming.png';

const Qzone = () => {
    return (
        <div className='bg-base-300 p-2'>
            <h4 className='font-bold'>Q-Zone</h4>
            <div>
                <img src={swim} alt="" />
                <img src={classr} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;