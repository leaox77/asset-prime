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
import Clients from './components/Clients';
import CallToAction from './components/CallToAction';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Clients />
        <About />
        <WhyUs />
        <CallToAction />
        {/* <Crypto /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;