import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Home';
import Error from "./Components/Error"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Logement from "./Pages/Logement"
import About from "./Pages/About"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
          <Router>
            <Header />
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Error />} />
                  <Route path="/logements/:idPerso" element={<Logement />} />
              </Routes>
            <Footer />
        </Router>   
  </React.StrictMode>
);

