import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './services/Home';
import About from './services/About';
import Services from './services/Services';
import UploadReport from './services/UploadReport';
import ContactUs from './services/ContactUs';
import LearnMoreXRay from './services/LearnMoreXRay';
import LearnMoreCTScan from './services/LearnMoreCTScan';
import LearnMoreMRI from './services/LearnMoreMRI';
import Login from './services/Login';

function App() {
  return (
    <Router basename="/ScanRay">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/upload" element={<UploadReport />} />
        <Route path="/services/xray" element={<LearnMoreXRay />} />
        <Route path="/services/ctscan" element={<LearnMoreCTScan />} />
        <Route path="/services/mri" element={<LearnMoreMRI />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;