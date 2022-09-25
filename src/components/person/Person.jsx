import React from 'react';
import './person.scss';

const Person = () => {
  return (
    <div className='widget'>
        <div className='grad-blue' id="icon-box"><i className='bi-person-video3'></i></div>
        <div className="data-container--top">
            <p>Teacher</p>
            <h3>Sangam</h3>
        </div>
        <hr />
        <div className="data-container--bottom">
            <p>Joined: <span className='gain'>18 August 2022</span></p>
        </div>
    </div>
  )
}

export default Person