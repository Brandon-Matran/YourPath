import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnicianForm from './TechnicianForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturersList';
import MainPage from './MainPage';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers/list" element={<ManufacturersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
