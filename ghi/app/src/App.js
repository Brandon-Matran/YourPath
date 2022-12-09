import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturersList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistory from './ServiceHistory';
import MainPage from './MainPage';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians/" element={<TechnicianList />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers/" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/appointments/" element={<ServiceAppointmentList />} />
          <Route path="/appointments/new" element={<ServiceAppointmentForm />} />
          <Route path="search/" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
