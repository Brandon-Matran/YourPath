import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
