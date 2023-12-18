import React from 'react'
import  "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <image className='login-log' src="" alt="Logo"></image>
      <div className='login-container'>
       <form>
          <h1>sign-In</h1>
          <h5>Email</h5>
          <input type='Text' />
          <h5>Passward</h5>
          <input type="password" />
          <button type='submit' className='login-signInButton'>SignIn</button>
          <p>
            by sign-in you are agree to term and conditions for GBBC
          </p>
          <button className='login-registerButton'>Creat Your Account</button>
       </form>
      </div>
      
    </div>
  )
}

export default Login
