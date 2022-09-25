import {React, useState, useEffect} from 'react'
import Axios from 'axios'
import {Formik} from 'formik'
import Flatpickr from 'react-flatpickr'
import './employees.scss'
import "flatpickr/dist/themes/material_blue.css";

const AddEmployee = () => {
  const [activeForm, setActiveForm] = useState('personalInfo')
  const [employeeGender, setEmployeeGender] = useState("female")
  const [date, setDate] = useState(new Date())
  const [joiningDate, setJoiningDate] = useState(new Date())

  useEffect(() => {
    const forms = document.getElementsByClassName('employeeAddForm')
    var visibleForm = document.getElementById(activeForm)
    const gender = document.getElementsByClassName('genderOption')
    const selectedGender = document.getElementById(employeeGender)

    for(let i=0; i<gender.length; i++){
      gender[i].classList.remove("selected")
    }
    selectedGender.classList.add("selected");

    for (let i = 0; i < forms.length; i++) {
      forms[i].style.display = "none";
    }
    visibleForm.style.display = "flex";

  })

  const getBankInfo = async (employeeIfsc) => {
    if(employeeIfsc.length === 11){
      const ifscresult = await Axios.get(`https://ifsc.razorpay.com/${employeeIfsc}`)
      if(ifscresult.request.status === 200){
        const bank = ifscresult.data.BANK
        const branch = ifscresult.data.BRANCH
        console.log(ifscresult)
        document.getElementById("bank").setAttribute("value", bank)
        document.getElementById("branch").setAttribute("value", branch)
      }
    }
    else{
      document.getElementById("bank").setAttribute("value", "IFSC code is wrong or incomplete")
      document.getElementById("branch").setAttribute("value", "IFSC code is wrong or incomplete")
    }
  }


  return (
    <div className='addEmployee'>
      <div className="employeesWrapper">
        <h1 className="title">Add Employee</h1>
        {/* Personal Details Form */}
        <form method="post" className='employeeAddForm' id='personalInfo'>
          <h3 className='formTitle'>1. Personal Details</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" name="firstName" id="firstName" placeholder='e.g., Satyam' />
            </div>
            <div className="column">
              <label htmlFor="middleName">Middle Name</label>
              <input type="text" name="middleName" id="middleName" placeholder='e.g., Raj' />
            </div>
            <div className="column">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" placeholder='e.g., Singhania' />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Gender</label>
              <span className="columnSpan">
                <p className="genderOption" id="male" onClick={()=> setEmployeeGender("male")}><i className='bi-gender-male'></i> Male</p>
                <p className="genderOption selected" id="female" onClick={()=> setEmployeeGender("female")}><i className='bi-gender-female'></i> Female</p>
                <p className="genderOption" id="lgbtq" onClick={()=> setEmployeeGender("lgbtq")}><i className='bi-heart-fill'></i> LGBTQ+</p>
              </span>
            </div>
            <div className="column">
              <label htmlFor="dob">Date of Birth</label>
              <Flatpickr className="datePicker" id='dob' value={date} options={{ dateFormat: "j F, Y" }} onChange={() => setDate(date)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="aadhar">Aadhar ID Number</label>
              <input type="number" name='aadhar' id='aadhar' />
            </div>
            <div className="column">
              <label htmlFor="aadhar">Personal Account Number (PAN)</label>
              <input type="number" name='aadhar' id='aadhar' />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="education">Educational Qualification</label>
              <input type="text" name='education' id='education' placeholder='e.g., B.Sc. in Mathematics from Hindu College' />
            </div>
            <div className="column">
              <label htmlFor="university">University/Institution Name</label>
              <input type="text" name='university' id='university' placeholder='e.g., University of Delhi' />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="primaryNumber">Contact Number</label>
              <input type="number" name='primaryNumber' id='primaryNumber' placeholder='e.g., 91 78380 74742' />
            </div>
            <div className="column">
              <label htmlFor="alternateNumber">Alternate Number</label>
              <input type="number" name='alternateNumber' id='alternateNumber' placeholder='e.g., 91 95959 74742' />
            </div>
            <div className="column">
              <label htmlFor="email">Email ID</label>
              <input type="email" name='email' id='email' placeholder='e.g., username123@gmail.com' />
            </div>
          </div>
          <div className="column">
            <label htmlFor="residentialAddress">Residential Address</label>
            <textarea name="residentialAddress" id="residentialAddress"></textarea>
          </div>
          <div className="column">
            <label htmlFor="permanentAddress">Permanent Address</label>
            <span className='columnSpan'><input type="checkbox" id='addressMatch'/><label htmlFor="addressMatch">Same as Residential Address</label></span>
            <textarea name="permanentAddress" id="permanentAddress"></textarea>
          </div>
          <div className="formNavigationRow">
            <span></span>
            <button type='button' className="generalButton" id='nextButton' onClick={()=> setActiveForm('financialInfo')}>Save & Next</button>
          </div>
        </form>


        {/* Work Experience Form */}
        <form method="post" className='employeeAddForm' id='financialInfo'>
          <h3 className='formTitle'>2. Financial Details</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="accountNumber">Bank Account Number</label>
              <input type="number" name="accountNumber" id="accountNumber" placeholder='Bank Account Number' />
            </div>
            <div className="column">
              <label htmlFor="ifsc">IFSC Code</label>
              <input type="text" name="ifsc" id="ifsc" placeholder='IFSC Code Of Bank Branch' onChange={(e) => getBankInfo(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="bank">Bank Name</label>
              <input type="text" name='bank' id='bank' value="" readOnly />
            </div>
            <div className="column">
              <label htmlFor="branch">Branch Name</label>
              <input type="text" name='branch' id='branch' value="" readOnly />
            </div>
          </div>
          <div className="formNavigationRow">
            <button type='button' className="generalButton" onClick={()=> setActiveForm('personalInfo')}>Previous</button>
            <button type='button' className="generalButton" onClick={()=> setActiveForm('jobInfo')}>Save & Next</button>
          </div>
        </form>


        {/* Job Information Form */}
        <form method="post" className='employeeAddForm' id='jobInfo'>
          <h3 className='formTitle'>3. Job Details</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="branch">Select Branch</label>
              <select name="branch" className='customSelector selectpicker' id="branch">
                <option value="1">Bangalore</option>
                <option value="2">Delhi</option>
                <option value="3">Mumbai</option>
              </select>
            </div>
            <div className="column">
              <label htmlFor="department">Select Department</label>
              <select name="department" className='customSelector' id="department">
                <option value="1">Science</option>
                <option value="2">Information Technology</option>
                <option value="3">English</option>
              </select>
            </div>
            <div className="column">
              <label htmlFor="role">Select Designation</label>
              <select name="role" className='customSelector' id="role">
                <option value="1">Manager</option>
                <option value="2">Principal</option>
                <option value="3">Teacher</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
          <div className="formNavigationRow">
            <button type='button' className="generalButton" onClick={()=> setActiveForm('financialInfo')}>Previous</button>
            <button type='button' className="generalButton" onClick={()=> setActiveForm('salaryInfo')}>Save & Next</button>
          </div>
        </form>


        {/* Salary Information Form */}
        <form method="post" className='employeeAddForm' id='salaryInfo'>
          <h3 className='formTitle'>4. Salary Details</h3>
          <div className="row">
            <div className="column">
              <label htmlFor="joiningDate">Joining Date</label>
              <Flatpickr className="datePicker" id='joiningDate' value={joiningDate} options={{ dateFormat: "j F, Y" }} onChange={() => setJoiningDate(joiningDate)} />
            </div>
            <div className="column">
              <label htmlFor="salaryType">Salary Type</label>
              <select name="salaryType" className='customSelector' id="salaryType">
                <option value="1">Weekly</option>
                <option value="2">Monthly</option>
                <option value="3">Yearly</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="basicPay">Basic Pay</label>
              <input type="number" name="basicPay" id="basicPay" />
            </div>
            <div className="column">
              <label htmlFor="hra">HRA (in % of Basic Pay)</label>
              <input type="number" name="hra" id="hra" />
            </div>
            <div className="column">
              <label htmlFor="da">Dearer Allowance (in %)</label>
              <input type="number" name="da" id="da" />
            </div>
            <div className="column">
              <label htmlFor="da">Travel Allowance (in %)</label>
              <input type="number" name="da" id="da" />
            </div>
          </div>
          <h4 className="formSubtitle">Employee Contribution to PF</h4>
          <div className="row">
            <div className="column">
              <label htmlFor="employeePf">Employee PF</label>
              <input type="number" name="employeePf" id="employeePf" />
            </div>
            <div className="column">
              <label htmlFor="employeeEsi">Employee ESI</label>
              <input type="number" name="employeeEsi" id="employeeEsi" />
            </div>
          </div>

          <h3 className="formTitle mb-0">Deductions</h3>
          <h4 className="formSubtitle">Employer Contribution to PF</h4>
          <div className="row">
            <div className="column">
              <label htmlFor="employerPf">Employer PF</label>
              <input type="number" name="employerPf" id="employerPf" />
            </div>
            <div className="column">
              <label htmlFor="employerEsi">Employer ESI</label>
              <input type="number" name="employerEsi" id="employerEsi" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="professionalTax">Professional Tax</label>
              <select name="professionalTax" className='customSelector' id="professionalTax">
                <option value="1">Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Punjab</option>
              </select>
            </div>
            <div className="column">
              <label htmlFor="incomeTax">Income Tax (in %)</label>
              <input type="number" name="incomeTax" id="incomeTax" placeholder='Income Tax' />
            </div>
            <div className="column">
              <label htmlFor="cess">Cess (in %)</label>
              <input type="number" name="cess" id="cess" placeholder='Cess' />
            </div>
          </div>
          <div className="formNavigationRow">
            <button type='button' className="generalButton" onClick={()=> setActiveForm('jobInfo')}>Previous</button>
            <button type='button' className="generalButton">Save & Next</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default AddEmployee