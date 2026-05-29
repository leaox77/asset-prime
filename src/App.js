import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Crypto from './components/Crypto';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <WhyUs />
        <Crypto />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;