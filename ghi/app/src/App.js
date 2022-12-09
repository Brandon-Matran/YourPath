// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AutomobileForm from './AutomobilesForm';
import AutomobileList from './AutomobilesList';
import CustomerForm from './CustomerForm';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturersList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistory from './ServiceHistory';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPerson from './SalesPersonForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordHistory from './SalesRecordHistory';
import SalesList from './SalesRecordList';
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/models" element={<VehicleModelList />} />
          <Route path="/models/new" element={<VehicleModelForm />} />
          <Route path="/customers" element={<CustomerForm />} />
          <Route path="/sales_person/new" element={<SalesPerson />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/sales/new" element={<SalesRecordForm />} />
          <Route path="/sales_history" element={<SalesRecordHistory />} />
          <Route path="/technicians/" element={<TechnicianList />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers/" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/appointments/" element={<ServiceAppointmentList />} />
          <Route path="/appointments/new" element={<ServiceAppointmentForm />} />
          <Route path="search/" element={<ServiceHistory />} />
        </Routes>
        {/* <div className="container"> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<MainPage />} /> */}

        {/* </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
