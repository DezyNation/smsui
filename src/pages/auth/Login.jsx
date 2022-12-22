import React from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import './auth.scss';
import authimg from '../../assets/illustrations/authimg.svg'

const Login = () => {
  const AuthAlert = withReactContent(Swal)
  const handleAuth = (e) => {
    e.preventDefault()
    AuthAlert.fire({
      title: 'Wrong Credentials',
      text: 'The credentials you entered are incorrect. Try reseting your password.',
      icon: 'error' 
    })
  }
  return (
    <>
      <div className="container">
        <img src={authimg} alt="Sign in to your Genzydash dashboard" className='auth-img' />
        <form className="auth-wrapper">
          <h1 className="title">Login</h1>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Your registered email' required />
          </div>
          <div className="col">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Your password' required />
          </div>
          <button type="submit" className='generalButton' onClick={(e) => handleAuth(e)}>login</button>
          <div className="mini-spacer"></div>
          <div className="centered">
            <Link to='/reset/password'>Forgot your password?</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login