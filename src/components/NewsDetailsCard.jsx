import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5 border-1 border-base-200 mr-13 mt-2 p-4 rounded-md'>
            <img className='rounded-md h-88 w-full' src={news.image_url} alt="" />
            <h3 className='text-2xl font-bold'>{news.title}</h3>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/ctg/:${news.category_id}`} className='btn text-white bg-secondary'><FaArrowLeftLong />All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;