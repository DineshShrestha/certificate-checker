import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from './components/Footer';
import HomeScreen from './Pages/HomeScreen';
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import NotFound from './Pages/NotFound';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
