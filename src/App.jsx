import { React, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './app.scss';
import Management from './pages/sms/management/Management';
import Home from './pages/sms/home/Home'
import Login from './pages/auth/Login'
import Fees from "./pages/sms/fees/Fees";
import Branch from "./pages/sms/branch/Branch";
import Users from "./pages/sms/users/Users";
import Payroll from "./pages/payroll/payroll/Payroll";
import Attendance from "./pages/payroll/attendance/Attendance";
import Employees from "./pages/payroll/employees/Employees";
import Payments from "./pages/payroll/payments/Payments";
import Reports from "./pages/payroll/reports/Reports";
import Salary from "./pages/payroll/salary/Salary";
import Settings from "./pages/payroll/settings/Settings";
import AddEmployee from "./pages/payroll/employees/AddEmployee";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import NotFound from "./pages/cms/NotFound";
import Auth from "./pages/auth/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <div className="App">
      {isAuthenticated ?
        <div className="main">
          <Sidebar />
          <div className="mainContainer">
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path='/sms/management' element={<Management />} />
              <Route path='/sms/fees' element={<Fees />} />
              <Route path='/sms/branch' element={<Branch />} />
              <Route path='/sms/user' element={<Users />} >
                <Route path='all' element={<Users />} />
                <Route path=':userId' element={<Users />} />
              </Route>
              <Route path="payroll">
                <Route path="payroll" element={<Payroll />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="employees" element={<Employees />} />
                <Route path="employees/add-employee" element={<AddEmployee />} />
                <Route path="payments" element={<Payments />} />
                <Route path="reports" element={<Reports />} />
                <Route path="salary" element={<Salary />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </div> : <Auth/> }

    </div>
  );
}

export default App;
