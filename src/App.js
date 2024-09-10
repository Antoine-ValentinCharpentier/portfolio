import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useDarkMode from './hooks/useDarkMode';

export default function App() {

  const [darkMode, switchDarkMode] = useDarkMode();
  
  return (
    <div className={darkMode ? 'dark-mode': 'light-mode'}>
        <Router>
            <NavBar isDarkMode={darkMode} switchDarkMode={switchDarkMode} />
            <Routes>
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Home/>} />
            </Routes>
        </Router>
    </div>
  );
}
