import React from 'react';
import { FaInstagram, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
           <h3 className='font-bold'>Find Us On</h3>
           
            <div className="join w-full join-vertical mt-3">
               <button className="btn bg-base-100 justify-start  join-item"><FaFacebook size={18}></FaFacebook> Facebook</button>
               <button className="btn bg-base-100 justify-start  join-item"><FaTwitter size={18} ></FaTwitter> Twitter</button>
               <button className="btn bg-base-100 justify-start  join-item"><FaInstagram size={18}></FaInstagram> Instragram</button>

            </div> 
        </div>
    );
};

export default FindUs;