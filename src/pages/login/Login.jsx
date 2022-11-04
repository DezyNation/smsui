import React from 'react';
import './login.scss';
import authimg from '../../assets/illustrations/authimg.svg'

const Login = () => {
  return (
    <>
      <div className="container">
        <img src={authimg} alt="Test" className='auth-img'/>
        <div className="auth-wrapper">
          <h1 className="title">Login</h1>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Your registered email' />
          </div>
          <div className="col">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Your password' />
          </div>
          <button type="submit">login</button>
        </div>
      </div>
    </>
  )
}

export default Login