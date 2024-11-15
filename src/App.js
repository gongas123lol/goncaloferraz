import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbarm from './components/Navbarm';
import Contacts from './pages/Contacts';
import Home from "./pages/home";


function App() {
    return (
        <Router>
            <Navbarm />
            <Routes>
                {/* Define specific routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />

                {/* Redirect from "/" to "/home" */}
                <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
