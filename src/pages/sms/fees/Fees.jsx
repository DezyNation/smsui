import React from 'react';
import './fees.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Widget from '../../../components/widgets/Widget';
import Table from '../../../components/table/Table';

const Fees = () => {
  return (
    <div className="fees">
        <div className="widgetWrapper">
            <Widget type="fee_collected" />
            <Widget type="fee_collected" />
            <Widget type="fee_pending" />
            <Widget type="fee_pending" />
        </div>
        <div className="tableWrapper">
            <h1 className="title">Fees Collection</h1>
            <p className="subtitle">March - August</p>
            <Table />
        </div>
        <div className="tableWrapper">
            <h1 className="title">Pending Fees</h1>
            <p className="subtitle">March - August</p>
            <Table />
        </div>
        <div className="tableWrapper">
            <h1 className="title">Scholarships Disbursement</h1>
            <p className="subtitle">March - August</p>
            <Table />
        </div>
    </div>
  )
}

export default Fees