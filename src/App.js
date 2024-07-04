import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import Main from "./components/Main"
import Pricing from './components/Pricing';
import Hero from './components/Hero';
function App() {
  return (
      <div className="container">
        <Header/>
        <Hero/>
        <Main/>
        <Pricing/>
        <Footer/>
      </div>
  );
}

export default App;
