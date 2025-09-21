import React from 'react'
import { Routes, Route } from "react-router-dom";

import RegistrationForm from "../Components/Signup/RegistrationForm";
import Home from "../Pages/Home";

function Routs() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<RegistrationForm />} path="/register" />
      </Routes>
    </div>
  );
}

export default Routs
