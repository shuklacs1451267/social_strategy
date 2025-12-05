import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RegistrationForm from '../Components/Signup/RegistrationForm';
import Home from '../Pages/Home';

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>
  );
}

export default Routs;
