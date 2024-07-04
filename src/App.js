import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import Main from "./components/Main"
import Pricing from './components/Pricing';
function App() {
  return (
      <div className="container">
        <Header/>
        <Main/>
        <Pricing/>
        <Footer/>
      </div>
  );
}

export default App;
