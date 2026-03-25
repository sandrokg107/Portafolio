import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllCertificates from '../pages/AllCertificates';
import AllProjects from '../pages/AllProjects';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificaciones" element={<AllCertificates />} />
      <Route path="/proyectos" element={<AllProjects />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;