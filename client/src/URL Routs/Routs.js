import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RegistrationForm from '../Components/Signup/RegistrationForm';
import ServiceSection from '../Components/Common/ServiceSection';
import Home from '../Pages/Home';

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/service" element={<ServiceSection />} />
    </Routes>
  );
}

export default Routs;
