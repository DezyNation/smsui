import React from 'react'
import { NavLink } from 'react-router-dom'
import './employees.scss'
import Table from '../../../components/table/Table'

const Employees = () => {
  return (
    <div className="employees">
      <div className="employeesWrapper">
        <h1 className="title">All Employees</h1>
        <Table />
        <NavLink to="/payroll/employees/add-employee" className="generalButton"><i className='bi-plus'></i> Add Employee</NavLink>
      </div>
    </div>
  )
}

export default Employees