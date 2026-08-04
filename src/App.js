import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from './components/Footer';
import HomeScreen from './Pages/HomeScreen';
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import NotFound from './Pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/update-password" element={<UpdatePassword/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
