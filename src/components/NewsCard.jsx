import React from 'react';
import { FaBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

// Helper function to format the date (e.g., "2022-08-21" -> "August 21, 2022")
const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const NewsCard = ({ newsItem }) => {
    const { 
        title, 
        author, 
        image_url, 
        details, 
        tags, 
        total_view, 
        rating 
    } = newsItem;

    const formattedDate = formatDate(author.published_date);
    const fullTagList = tags.join(', '); // Join all tags for the "Tag Cloud" line

    // Create a snippet for the main article body
    const snippet = details.substring(0, 150) + '...';

    return (
        <div className="max-w-xl bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden font-sans">
            
            {/* Author and Action Row */}
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                    <img 
                        className="w-10 h-10 rounded-full object-cover" 
                        src={author.img} 
                        alt={author.name} 
                    />
                    <div className="text-sm">
                        <p className="font-semibold text-gray-800">{author.name}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-red-500" />
                    <FaShareAlt className="cursor-pointer hover:text-red-500" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold p-4 pb-2 leading-snug text-gray-900">
                {title}
            </h2>

            {/* Main Image */}
            <div className="p-4 pt-0">
                <img 
                    className="w-full h-auto object-cover rounded-lg" 
                    src={image_url} 
                    alt={title} 
                />
            </div>
            
            {/* Metadata and Details */}
            <div className="px-4 text-sm text-gray-600">
                {/* Date and Tags */}
                <p className="mb-2">
                    <span className="font-semibold">Wednesday, April 23, 2025</span> | Tag Cloud Tags: <span className="text-gray-700">{fullTagList}</span>
                </p>

                {/* Article Snippet */}
                <p className="mb-3 leading-relaxed">
                    {snippet}
                </p>
                <button className="text-orange-500 font-semibold mb-4 hover:text-orange-600">
                    Read More
                </button>
            </div>
            
            {/* Footer: Rating and Views */}
            <div className="flex items-center justify-between p-4 pt-2 border-t border-gray-100">
                
                {/* Star Rating */}
                <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar 
                            key={i}
                            className={`w-4 h-4 ${i < rating.number ? 'text-orange-500' : 'text-gray-300'}`}
                        />
                    ))}
                    <span className="text-sm font-semibold text-gray-800">
                        {rating.number}.0
                    </span>
                </div>
                
                {/* Total Views */}
                <div className="flex items-center space-x-1 text-gray-500">
                    <FaEye className="w-4 h-4" />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;