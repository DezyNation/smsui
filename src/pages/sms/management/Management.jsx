import React from 'react';
import './management.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Widget from '../../../components/widgets/Widget';
import Navbar from '../../../components/navbar/Navbar';
import Table from '../../../components/table/Table';

const Management = () => {
  return (
    <div className='management'>
      <div className="widgetWrapper">
          <Widget type="student" />
          <Widget type="student" />
          <Widget type="student" />
          <Widget type="student" />
      </div>
      <div className="tableWrapper">
          <h1 className="title">Management Members</h1>
          <Table />
          <a href="/" className="generalButton"><i className='bi-plus'></i>Add Member</a>
      </div>
    </div>
  )
}

export default Management