import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar' id='sidebar'>
        <div className="top">
            <h1 className="logo">Genzydash</h1>
            <NavLink to='#' className="user-details">
              <i className="bi-person-circle"></i>
              <h3 className="user-name">Sangam Kumar</h3>
            </NavLink>
        </div>
        <div className="center">
          <form action="#" className="search-form">
            <i className="bi-search"></i>
            <input type="search" name="searchq" id="searchq" placeholder='Search'/>
          </form>
          <NavLink to="/" className='sidepanel-link'><i className='bi-grid'></i> Dashboard</NavLink>
          <NavLink to="/sms/management" className='sidepanel-link'><i className='bi-speedometer'></i> Management Controls</NavLink>
          <NavLink to="/sms/fees" className='sidepanel-link'><i className='bi-wallet'></i> Fee Management</NavLink>
          <NavLink to="/sms/branch" className='sidepanel-link'><i className='bi-snow3'></i> Branch Management</NavLink>
          <NavLink to="/sms/user/all" className='sidepanel-link'><i className='bi-people-fill'></i> User Management</NavLink>
          <NavLink to="#" className='sidepanel-link'><i className='bi-journal-bookmark-fill'></i> Lesson Planner</NavLink>
          <NavLink to="#" className='sidepanel-link'><i className='bi-file-earmark-check-fill'></i> Exam Management</NavLink>
          <hr />
          <NavLink to="/payroll/payroll" className='sidepanel-link'><i className='bi-currency-rupee'></i> Payroll</NavLink>
          <NavLink to="/payroll/employees" className='sidepanel-link'><i className='bi-people-fill'></i> Employees</NavLink>
          <NavLink to="/payroll/attendance" className='sidepanel-link'><i className='bi-calendar-check-fill'></i> Attendance</NavLink>
          <NavLink to="/payroll/reports" className='sidepanel-link'><i className='bi-clipboard-data-fill'></i> Reports</NavLink>
          <NavLink to="/payroll/salary" className='sidepanel-link'><i className='bi-cash-coin'></i> Calculate Salary</NavLink>
          <NavLink to="/payroll/payments" className='sidepanel-link'><i className='bi-wallet'></i> Payments</NavLink>
          <NavLink to="/payroll/settings" className='sidepanel-link'><i className='bi-gear-wide'></i> Settings</NavLink>
        </div>
        <div className="bottom">
          <NavLink to="#" className='sidepanel-link'><i className='bi-question-circle'></i> Help</NavLink>
          <NavLink to="#" className='sidepanel-link'><i className='bi-power'></i> Logout</NavLink>
        </div>
    </div>
  )
}

export default Sidebar