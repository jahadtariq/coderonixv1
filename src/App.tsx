import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Company from '../pages/Company/company';

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company" element={<Company />} />
        </Routes>
        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
