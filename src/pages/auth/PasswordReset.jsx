import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Link} from 'react-router-dom'
import forgotpassword from '../../assets/illustrations/forgotpassword.svg'

const PasswordReset = () => {
  const ResetAlert = withReactContent(Swal)
  const showAlert = () => {
    ResetAlert.fire({
      title: 'Success!',
      text: 'A password reset link has been sent to your email ID.',
      icon: 'success'
    })
  }
  return (
    <>
    <div className="container">
      <img src={forgotpassword} alt="Reset your Genzydash password" className='auth-img' />
      <form className="auth-wrapper">
        <h1 className="title">Reset Password</h1>
        <div className="col">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Your registered email'/>
        </div>
        <button type="submit" className='generalButton' onClick={(e)=>{e.preventDefault(); showAlert()}}>send password reset link</button>
        <div className="centered">
            <Link to='/'>Back to login page</Link>
          </div>
      </form>
    </div>
    </>
  )
}

export default PasswordReset