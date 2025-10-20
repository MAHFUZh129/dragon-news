import React, { use, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Login = () => {
    const [err,setErr]=useState('')
    const {signIn}=use(AuthContext)
    const location=useLocation();
    const navigate  =useNavigate()
    const handleLogin=(e)=>{
           
          e.preventDefault();
          const form = e.target;
          const email =form.email.value
          const password =form.password.value
        //   console.log({email,password})
        signIn(email,password)
        .then((result)=>{
            const user =result.user
            // console.log(user)
            navigate(`${location.state?location.state:'/'}`)
        })
        .catch((error)=>{
            const errorCode=error.code
            setErr(errorCode)
        //   const errorMessage=error.message
        //   alert(errorCode,errorMessage)
        })
    }
    return (
        <div className='flex justify-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className='font-semibold text-2xl text-center py-3'>Login your account</h1>
        <fieldset className="fieldset">
          <label className="label font-bold text-primary">Email</label>
          <input name='email' required type="email" className="input" placeholder="Email" />
          <label className="label font-bold text-primary">Password</label>
          <input name='password' required type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            err && <p className='text-red-500'>{err}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <h5 className='text-center font-semibold mt-3 '>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></h5>
        </fieldset>
      </form>
      </div>
        </div>
    );
};

export default Login;