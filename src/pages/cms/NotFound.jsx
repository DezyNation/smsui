import React from 'react'
import NotFoundImg from '../../assets/images/404.png'

const NotFound = () => {
  return (
    <div className="errorImage">
      <img src={NotFoundImg} alt="Page Not Found" />
    </div>
  )
}

export default NotFound