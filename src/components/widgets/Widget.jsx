import React from 'react';
import './widget.scss';

const Widget = ({ type }) => {

    let data;

    switch (type) {
        case "student":
            data = {
                title: "Students",
                background: "grad-black",
                icon: "bi-mortarboard-fill",
                isMoney: false,
                previousValue: 1500,
                currentValue: 1908,
            }
            break;

        case "staff":
            data = {
                title: "Staff",
                background: "grad-blue",
                icon: "bi-people-fill",
                isMoney: false,
                previousValue: 1500,
                currentValue: 100,
            }
            break;

        case "fee_collected":
            data = {
                title: "Fee Collected",
                background: "grad-green",
                icon: "bi-currency-rupee",
                isMoney: true,
                previousValue: 1500,
                currentValue: 19080,
            }
            break;

        case "fee_pending":
            data = {
                title: "Fee Pending",
                background: "grad-red",
                icon: "bi-hourglass-split",
                isMoney: true,
                previousValue: 1500,
                currentValue: 5200,
            }
            break;
    
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className={data.background} id="icon-box"><i className={data.icon}></i></div>
        <div className="data-container--top">
            <p>{data.title}</p>
            <h3>{data.isMoney && "₹"} {data.currentValue}</h3>
        </div>
        <hr />
        <div className="data-container--bottom">
            <p><span className='gain'>{ (data.currentValue - data.previousValue)/100 }%</span> than last month</p>
        </div>
    </div>
  )
}

export default Widget