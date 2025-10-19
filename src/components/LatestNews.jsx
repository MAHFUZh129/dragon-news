import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex w-11/12 mx-auto items-center gap-3 my-7 bg-base-200 p-3'>
            <p className='flex bg-secondary text-white px-3 py-1'>Latest</p>
           <Marquee className='flex space-x-96'>
            <p className='font-bold'>Lorem ipsum, dolor si</p>
            <p className='font-bold'>Lorem ipsum, dolor sit </p>
            <p className='font-bold'>Lorem ipsum, dolor sit </p>
            <p className='font-bold'>Lorem ipsum, dolor sit </p>
           </Marquee>
        </div>
    );
};

export default LatestNews;