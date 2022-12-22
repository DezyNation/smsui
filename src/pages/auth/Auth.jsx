import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import PasswordReset from './PasswordReset'

const Auth = () => {
  return (
    <>
    <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='reset/password' element={<PasswordReset />}></Route>
    </Routes>
    </>
  )
}

export default Auth