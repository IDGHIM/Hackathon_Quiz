import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage'; 


const App = () => {
   return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/*page 404 */}
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
    </Router>
  );
};

export default App;
