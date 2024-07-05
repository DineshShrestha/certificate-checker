import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Customer from './components/Customer';
import "./App.css"
function App() {
  return (
          <div className="container">
            <Header/>
            <Hero/>
            <Feature/>
            <Pricing/>
            <Customer/>
            <Footer/>
          </div>
  );
}

export default App;
