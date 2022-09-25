import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <i className='bi-list'></i>
                <h1 className="logo">Genzydash</h1>
            </div>
            <div className="right">
                <div className="nav-icons">
                    <a href="tel: +917838074742"><i className='bi-telephone-fill'></i></a>
                    <a href="tel: +917838074742"><i className='bi-mortarboard-fill'></i></a>
                    <a href="tel: +917838074742"><i className='bi-bell-fill'><span id='notification-dot'></span></i></a>
                    <a href="tel: +917838074742"><i className='bi-person-circle'></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar