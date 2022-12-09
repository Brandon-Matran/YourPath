import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'



function Nav() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">CarCar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle mr-1" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">
                  Create...
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li className="nav-item">
                    <Link className="nav-link dropdown-item" to="/models/new" id="dropdown">Model</Link>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link dropdown-item" to="/automobiles/new" id="dropdown">Automobile</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link dropdown-item" to="/customers" id="dropdown">Customer</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link dropdown-item" to="/sales_person/new" id="dropdown">Sales Person</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/manufacturers/new" id="dropdown">Manufacturer</NavLink>
                  </li>
                </div>
              </div>

              <div className="dropdown">
                <button className="btn dropdown-toggle  btn-outline-light"  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">
                  List...
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/hats" id="dropdown">Manufacturers</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/models" id="dropdown">Vehicle Models</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/automobiles" id="dropdown">Automobiles</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/sales" id="dropdown">Sales Record</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/sales_history" id="dropdown">Sales Records</NavLink>
                  </li>
                </div>
              </div>
            </ul>
          </div>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">List of Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">Create Manufacturer</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/appointments/">List of Service Appointments</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/appointments/new">Schedule A Service Appointment</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/technicians/">Technician List</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/technicians/new">Add A Technician</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/search">Service History</NavLink>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  )
}



export default Nav;
