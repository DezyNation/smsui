import React from 'react'
import {AttendanceTable} from '../../../components/table/Table'
import './attendance.scss'

const Attendance = () => {
  return (
    <div className="attendance">
      <div className="tableWrapper">
        <h1 className="title">Today's Attendance</h1>
        <AttendanceTable />
      </div>
    </div>
  )
}

export default Attendance