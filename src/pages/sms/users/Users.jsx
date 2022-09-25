import React from 'react';
import './users.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Person from '../../../components/person/Person';
import Table from '../../../components/table/Table';

const Users = () => {
  return (
    <div className='users'>
        <div className="filterWrapper">
            <form action="#">
                <div className="column">
                    <label htmlFor="branchId">Select Branch</label>
                    <select name="branchName" id="branchName">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="column">
                    <label htmlFor="deptName">Select Department</label>
                    <select name="deptName" id="deptName">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="column">
                    <label htmlFor="grade">Select Grade</label>
                    <select name="grade" id="grade">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="column">
                    <label htmlFor="subject">Select Subject</label>
                    <select name="subject" id="subject">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
            </form>
        </div>
        <h1 className="title">Faculty Members</h1>
        <div className="widgetWrapper">
            <Person />
            <Person />
            <Person />
            <Person />
        </div>
        <div className="tableWrapper">
            <h1 className="title">Students</h1>
            <Table />
        </div>
    </div>
  )
}

export default Users