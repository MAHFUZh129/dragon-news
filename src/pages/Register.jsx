import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser,setUser,updateUser}=use(AuthContext)
  const navigate = useNavigate()
    const handleReg=(e)=>{
         e.preventDefault();
           const form = e.target;
          const name =form.name.value
          const photo =form.photo.value
          const email =form.email.value
          const password =form.password.value
    
        //  console.log(name)
         createUser(email,password)
         .then((result)=>{
                const user = result.user;
                // console.log(user)
                 updateUser({displayName:name,photoURL: photo})
                 .then(()=>{
                    setUser({...user,displayName:name,photoURL: photo})
                    navigate('/')
                 })
                 .catch((error) =>
                     {console.log(error)});
                 setUser(user)
                
         })
         .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

    }

    return (
         <div className='flex justify-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleReg} className="card-body">
        <h1 className='font-semibold text-2xl text-center py-3'>Register your account</h1>
        <fieldset className="fieldset">
            {/* name */}
          <label className="label font-bold text-primary">Name</label>
          <input name='name' required type="text" className="input" placeholder="Name" />
            {/* photourl */}
          <label  className="label font-bold text-primary">PhotoURL</label>
          <input name='photo' required type="text" className="input" placeholder="PhotoURL" />
            {/* email */}
          <label className="label font-bold text-primary">Email</label>
          <input name='email' required type="email" className="input" placeholder="Email" />
           {/* password */}
          <label className="label font-bold text-primary">Password</label>
          <input name='password' required type="password" className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <h5 className='text-center font-semibold mt-3 '>Dont’t Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></h5>
        </fieldset>
      </form>
      </div>
        </div>
    );
};

export default Register;