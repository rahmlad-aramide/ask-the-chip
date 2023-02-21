import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../assets/ask.svg';
import globe from './../assets/images/connect-globe.svg';

import Button from './../components/Button';

const SignIn = () => {
  return (
    <div className='min-h-screen font-Inter'>
      <div className='h-16'>
        <Link to="/">
          <img src={logo} alt="Ask the chip" />
        </Link>
      </div>
      <div className='flex flex-col md:flex-row h-[calc(100vh_-_4rem)]'>
        <div className='w-1/2 ml-8 my-8'>
          <div>
            <h1 className='font-Inter text-[32px] mb-8'>Sign In</h1>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='username' className='text-[24px] mb-4'>Username</label>
            <input type="text" name="username" id="username" placeholder='Enter your username' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-[24px] mb-4'>Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' />
          </div>
          <div className='flex text-center justify-center text-tertiary my-4 underline'>
            <Link>Forgot Password?</Link>
          </div>
          <div className='flex items-center'>
            <Button title="Sign In" path="sign-in" />
          </div>
        </div>
        <div className='w-1/2 '>
          <img src={globe} alt="People on globe" className='w-full max-h-[80vh]' />
        </div>
      </div>
    </div>
  )
}

export default SignIn