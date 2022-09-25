import React from 'react'
import './payroll.scss'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Widget from '../../../components/widgets/Widget'
import DoughnutChart from '../../../components/chart/DoughnutChart'

const Payroll = () => {
  return (
    <div className="payroll">
      <div className="widgetWrapper">
        <Widget type="fee_collected" />
        <Widget type="fee_pending" />
        <Widget type="fee_collected" />
        <Widget type="fee_pending" />
      </div>
      <div className="payrollRow">
        <div className="large">
          <h1 className="title">Recent Transactions</h1>
          <div className="transaction-data">
            <i className="transaction-type money-received bi-plus"></i>
            <p className='transaction-info'>Fees received from Manohar</p>
            <p className='transaction-amount'>₹ 2975</p>
            <p className="transaction-date">05 July 2022</p>
          </div>
          <div className="transaction-data">
            <i className="transaction-type money-spent bi-dash"></i>
            <p className='transaction-info'>Salary paid to Raghuvinder</p>
            <p className='transaction-amount'>₹ 2975</p>
            <p className="transaction-date">28 August 2022</p>
          </div>
          <div className="transaction-data">
            <i className="transaction-type money-spent bi-dash"></i>
            <p className='transaction-info'>Salary paid to Aanchal</p>
            <p className='transaction-amount'>₹ 2975</p>
            <p className="transaction-date">28 August 2022</p>
          </div>
          <div className="transaction-data">
            <i className="transaction-type money-received bi-plus"></i>
            <p className='transaction-info'>Fees received from Abhishek</p>
            <p className='transaction-amount'>₹ 2975</p>
            <p className="transaction-date">1 September 2022</p>
          </div>
          <div className="transaction-data">
            <i className="transaction-type money-received bi-plus"></i>
            <p className='transaction-info'>Fine received from Akanksha</p>
            <p className='transaction-amount'>₹ 2975</p>
            <p className="transaction-date">1 September 2022</p>
          </div>
        </div>
        <div className="small">
          <h1 className="title">Spend Analysis <span style={{fontSize: '.75rem', color: 'darkslategray'}}>(Current Semester)</span></h1>
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default Payroll