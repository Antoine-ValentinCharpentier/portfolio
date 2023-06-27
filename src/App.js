import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './assets/components/NavBar';
import Home from './assets/pages/Home';
import Projects from './assets/pages/Projects';
import Contact from './assets/pages/Contact';

export default function App() {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Home/>} />
            </Routes>
        </Router>
    </>
  );
}
