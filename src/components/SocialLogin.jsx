import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-bold'>Login with</h3>
            <div className='mt-3 space-y-2'>
                <button className='btn w-full btn-secondary btn-outline '><FcGoogle size={25}/>Login with Google</button>
                <button className='btn w-full btn-primary btn-outline '><FaGithub size={25} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;