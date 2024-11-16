import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbarm from './components/Navbarm';
import Contacts from './pages/Contacts';
import Home from "./pages/home";
import EarlyLife from "./pages/EarlyLife";
import Footer from "./components/Footer";
import Fsisel from "./pages/Fsisel";
import Education from "./pages/Education";

function App() {
    return (
        <Router>
            <Navbarm />
            <Routes>
                {/* Define specific routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/early-life" element={<EarlyLife/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/fsisel" element={<Fsisel/>} />
                <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
