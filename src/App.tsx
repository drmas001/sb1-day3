import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import MainDashboard from './components/MainDashboard';
import AdminDashboard from './components/AdminDashboard';
import NewPatientAdmission from './components/NewPatientAdmission';
import PatientDischarge from './components/PatientDischarge';
import PatientDetails from './components/PatientDetails';
import DailyReportManagement from './components/DailyReportManagement';
import SpecialtiesManagement from './components/SpecialtiesManagement';
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <ToastContainer />
        {user && <Sidebar />}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/"
              element={
                user ? (
                  user.isAdmin ? (
                    <AdminDashboard />
                  ) : (
                    <MainDashboard />
                  )
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/new-admission" element={user ? <NewPatientAdmission /> : <Navigate to="/login" replace />} />
            <Route path="/discharge" element={user ? <PatientDischarge /> : <Navigate to="/login" replace />} />
            <Route path="/patient/:mrn" element={user ? <PatientDetails /> : <Navigate to="/login" replace />} />
            <Route path="/daily-report" element={user ? <DailyReportManagement /> : <Navigate to="/login" replace />} />
            <Route path="/specialties" element={user ? <SpecialtiesManagement /> : <Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;