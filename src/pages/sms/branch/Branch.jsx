import React from 'react';
import './branch.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Widget from '../../../components/widgets/Widget';
import LineChart from '../../../components/chart/LineChart';
import Table from '../../../components/table/Table';

const Branch = () => {
  return (
    <div className="branch">
      <div className="selectionWrapper">
          <div className="selectionDiv">
              <form action="#" method="get">
                  <label htmlFor="branchName">Select Institution Branch</label>
                  <select name="branchName" id="branchName">
                      <option value="Bangalore">Bangalore</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                  </select>
              </form>
          </div>
      </div>
      <div className="widgetWrapper">
        <Widget type="student"/>
        <Widget type="staff"/>
        <Widget type="fee_collected"/>
        <Widget type="fee_pending"/>
      </div>
      <div className="chartsWrapper">
        <LineChart type="student" />
        <LineChart type="performance" />
      </div>
      <div className="tableWrapper">
        <h1 className="title">Recent Admissions</h1>
        <Table />
      </div>
      <div className="tableWrapper">
        <h1 className="title">Recent Transactions</h1>
        <Table />
      </div>
    </div>
  )
}

export default Branch