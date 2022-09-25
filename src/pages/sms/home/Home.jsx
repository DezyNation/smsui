import React from 'react';
import './home.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Widget from '../../../components/widgets/Widget';
import LineChart from '../../../components/chart/LineChart';
import Table from '../../../components/table/Table';

const Home = () => {
  return (
    <div className="home">
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

export default Home